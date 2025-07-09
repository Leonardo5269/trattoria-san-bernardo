import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'File mancante' }, { status: 400 });
  }

  const { data, error } = await supabase.storage
  .from('menu')
  .upload('menu.pdf', file, { upsert: true });

  if (error) {
    console.error('Errore upload:', error);
    return NextResponse.json({ error: error }, { status: 500 })
  }
  console.log('File caricato:', data);

  return NextResponse.json({ success: true }, { status: 201 });
}
