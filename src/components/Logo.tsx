import Image from 'next/image'
import { useId } from 'react'

import logo from '@/images/magi-logo.png'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return (
    <Image src={logo} alt='Magi logo' width={100} />
  )
}
