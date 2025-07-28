import { NextResponse, type NextRequest } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(req: NextRequest) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Non autenticato' }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get('file') as File | null;
  if (!file || file.type !== 'application/pdf') {
    return NextResponse.json({ error: 'File mancante o non valido' }, { status: 400 });
  }

  try {
    const { error: uploadError } = await supabase.storage
      .from('menu')
      .upload('menu.pdf', file, { upsert: true });
    
    if (uploadError) {
      console.error('Errore upload:', uploadError);
      return NextResponse.json({ error: uploadError }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Exception during upload:', error);
    return NextResponse.json({ error: 'Errore interno del server' }, { status: 500 });
  }
}