import Banner from "@/component/Banner";
import Layout from "@/component/Layout";

export default function Earphones() {
    return (
        <Layout handleCartClick={function (): void {
            throw new Error("Function not implemented.");
        } }>
            <Banner text={"Earphones"} />
        </Layout>
    )
}
