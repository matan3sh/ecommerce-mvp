import { PageHeader } from '@/app/admin/_components/PageHeader'
import { ProductsTable } from '@/app/admin/products/_components/ProductsTable'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AdminProductsPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader>Products</PageHeader>
        <Button asChild>
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </div>
      <ProductsTable />
    </>
  )
}
