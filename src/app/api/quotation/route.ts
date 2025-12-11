import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, location, phone } = body;

    if (!firstName || !email) {
      return NextResponse.json(
        { message: 'Nama dan Email wajib diisi' },
        { status: 400 },
      );
    }

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID || '',
      serviceAccountAuth,
    );

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({
      Timestamp: new Date().toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta',
      }),
      'First Name': firstName,
      'Last Name': lastName,
      Email: email,
      Location: location,
      Phone: phone,
    });

    return NextResponse.json(
      { message: 'Sukses! Data tersimpan di Google Sheet.' },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error('Google Sheet Error:', error);

    return NextResponse.json(
      { message: 'Gagal menyimpan data', error: (error as Error).message },
      { status: 500 },
    );
  }
}
