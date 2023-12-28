import Layout from "@/component/Layout";

export default function ProductDetail() {
    return (
        <Layout handleCartClick={function (): void {
            throw new Error("Function not implemented.");
        } }>
            <p>ProductDetail</p>
        </Layout>
    )
}
