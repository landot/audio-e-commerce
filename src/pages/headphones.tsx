import Layout from "@/component/Layout";

export default function Headphones() {
    return (
        <Layout handleCartClick={function (): void {
            throw new Error("Function not implemented.");
        } }>
            <p>Headphones</p>
        </Layout>
    )
}
