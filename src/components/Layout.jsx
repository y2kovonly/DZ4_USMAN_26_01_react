import {NavLink, Outlet} from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <NavLink to={'/'}>Form</NavLink>
      {' | '}
      <NavLink to={'/output'}>Output</NavLink>
      <Outlet/>
    </div>
  )
}