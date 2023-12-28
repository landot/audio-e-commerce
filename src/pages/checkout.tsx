import Layout from "@/component/Layout";

export default function Checkout() {
    return (
        <Layout handleCartClick={function (): void {
            throw new Error("Function not implemented.");
        } }>
            <p>Checkout</p>
        </Layout>
    )
}
