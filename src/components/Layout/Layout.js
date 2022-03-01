import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <p>Header</p>

                <Outlet />

            <p>Footer</p>
        </>
    )
}
