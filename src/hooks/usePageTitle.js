import { useEffect } from 'react'
import { school } from '../data/school'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${school.name}` : `${school.name} | Nursery, Primary & Secondary School in Lagos`
  }, [title])
}
