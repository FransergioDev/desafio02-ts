import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <>
      <Header title='DIO BANK'/>
      { children }
      <Footer />
    </>
  )
}
