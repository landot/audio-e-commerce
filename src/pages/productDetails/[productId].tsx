import Banner from "@/component/Banner";
import Layout from "@/component/Layout";
import { useRouter } from "next/router";

export default function ProductDetails() {
    const router = useRouter()
    const { productId } = router.query
    return (
        <Layout handleCartClick={function (): void {
            throw new Error("Function not implemented.");
        } }>
            <Banner text={"Product Details"} />
            <p>{productId}</p>
        </Layout>
    )
}
