import { useSession } from "next-auth/react"

interface Props {
  children: React.ReactNode
}

export default function Protected({ children }: Props) {
  const { data: session, status } = useSession()


  // When rendering client side don't display anything until loading is complete
  // if (typeof window !== "undefined" && loading) return (<div>loading...</div>)

  if (!session) {
    return (
      <div>
        you shall not pass
      </div>
    )
  }

  return (
    <div>
      {children}
    </div>
  )

}