import './Layout.scss';
import {PageHeader} from '../PageHeader/PageHeader';


export const Layout = ({children}) => {
  return (
    <main className="layout"> 
      <PageHeader/>
      {children} 
    </main>
    
  )
}