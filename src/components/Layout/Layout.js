import './Layout.scss';
import {PageHeader} from '../PageHeader/PageHeader';


export const Layout = ({children}) => {
  return (
    <>
    <PageHeader/>
      <main className="layout" > {children} </main>
    </>
  )
}