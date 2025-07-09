import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export async function POST(req: Request) {
  const supabase = createServerComponentClient({ cookies });

  const form = await req.formData();
  const file = form.get('file') as File;

  if (!file || file.type !== 'application/pdf') {
    return NextResponse.json({ error: 'Formato non valido' }, { status: 400 });
  }

  const filename = 'menu.pdf';

  const { error } = await supabase.storage
    .from('menu')
    .upload(filename, file, {
      cacheControl: '60',
      upsert: true,
    });

  if (error) {
    return NextResponse.json({ error: `Errore durante il caricamento del menu ${error.message}` }, { status: 500 });
  }
  
  return NextResponse.json({ message: 'Menu caricato con successo' }, { status: 201 });
}
