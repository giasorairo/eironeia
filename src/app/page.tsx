import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] });

export const revalidate = 3600;

export default function Home() {
  return (
    <div>eironeia !!</div>
  )
}
