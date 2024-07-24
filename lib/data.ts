import { sql } from '@vercel/postgres';
import { Product } from './definition';
//import path from 'path';
//import fs from 'fs';

export async function fetchTwoProducts(){
  const data = await sql<Product>`SELECT * FROM products LIMIT 2;`
  return data.rows
}

export async function fetchProducts(){
  try{
    console.log('Fetching products data...');
    const data = await sql<Product>`SELECT * FROM products`
    return data.rows
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products data.');
  }
}

export async function fetchProduct({id}: {id: number}){
  try{
    console.log('Fetching detail product data...');
    const data = await sql<Product>`SELECT * FROM products WHERE Id =${id}`
    return data.rows
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch detail product data.');
  }
}