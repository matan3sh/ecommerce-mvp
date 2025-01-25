import { Nav, NavLink } from '@/components/Nav'

export const dynamic = 'force-dynamic'

const NAV_LINKS = [
  {
    href: '/admin',
    label: 'Dashboard',
  },
  {
    href: '/admin/products',
    label: 'Products',
  },
  {
    href: '/admin/users',
    label: 'Customers',
  },
  {
    href: '/admin/orders',
    label: 'Sales',
  },
]

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Nav>
        {NAV_LINKS.map(({ href, label }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  )
}
