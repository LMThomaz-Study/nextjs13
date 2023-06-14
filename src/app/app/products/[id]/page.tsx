interface ProductProps {
  params: {
    id: string
  }
}

export default function Product({ params }: ProductProps) {
  return <h2>Product: {params.id}</h2>
}
