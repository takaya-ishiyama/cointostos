'use client'

import { Route } from '@/route';
import { useRouter } from 'next/navigation'
import React from 'react';
import { v4 as uuid } from 'uuid';

export default function Home() {
  const route = useRouter()
  const handleRouteToCoinToss = React.useCallback(() => {
    const id = uuid()
    route.push(Route.cointoss(id))
  }, [route])
  return (
    <div>
      <button onClick={handleRouteToCoinToss}>
        コイントスへ
      </button>
    </div>
  );
}
