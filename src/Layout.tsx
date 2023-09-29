import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function Layout() {
  return (
    <>
      <div style={{ width: '100%', height: 100, border: '1px solid black' }}>
        boyoung
      </div>

      <aside
        style={{
          width: 200,
          height: 900,
          border: '1px solid black',
          float: 'left'
        }}
      >
        <div>
          <Link to='/login'>page - login</Link>
        </div>
        <div>
          <Link to='/scroll'>page - scroll</Link>
        </div>
        <div>
          <Link to='/timer'>page - timer</Link>
        </div>
      </aside>
      <div
        style={{
          float: 'left',
          width: 400,
          height: 900
        }}
      >
        <Outlet />
      </div>
    </>
  );
}

export default Layout;