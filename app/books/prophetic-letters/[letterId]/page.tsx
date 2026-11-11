import LetterReaderPage from './reader/page'

export function generateStaticParams() {
  return Array.from({ length: 27 }, (_, i) => ({
    letterId: `letter-${i + 1}`,
  }))
}

export default async function Page({ params }: { params: Promise<{ letterId: string }> }) {
  const resolvedParams = await params
  return <LetterReaderPage params={Promise.resolve(resolvedParams)} />
}