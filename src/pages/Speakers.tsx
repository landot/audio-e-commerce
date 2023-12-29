import Banner from "@/component/Banner";
import Layout from "@/component/Layout";

export default function Speakers() {
    return (
        <Layout handleCartClick={function (): void {
            throw new Error("Function not implemented.");
        } }>
            <Banner text={"Speakers"} />
        </Layout>
    )
}
