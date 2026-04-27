import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'data', 'products.json');

export async function GET() {
  const data = fs.readFileSync(DATA_PATH, 'utf-8');
  return NextResponse.json(JSON.parse(data));
}

export async function POST(request: Request) {
  const products = await request.json();
  fs.writeFileSync(DATA_PATH, JSON.stringify(products, null, 2));
  return NextResponse.json({ success: true });
}
