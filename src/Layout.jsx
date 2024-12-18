import { NavLink } from "@mantine/core";
import { IconGauge } from "@tabler/icons-react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <main className="grid grid-cols-12">
            <nav className="col-span-3">
                <h1 className="p-3 text-blue-500 text-2xl font-bold mb-6">Pets JSPU</h1>
                <NavLink
                    href="/"
                    label="Flash Card"
                    leftSection={<IconGauge size="1rem" stroke={1.5} />}
                    childrenOffset={28}
                >
                    <NavLink component={Link} to="/" label="Nga Thien" />
                    <NavLink component={Link} label="Con Meo meo" to="/about" />
                </NavLink>
            </nav>
            <div className="col-span-9">
                <Outlet />
            </div>
        </main>
    );
};

export default Layout;
