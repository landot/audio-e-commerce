import speakerImg from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import headphones from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import Banner from "@/component/Banner";
import { CategoryItemProps } from "@/component/CategoryItem";
import CategoryList from "@/component/CategoryList";
import CompanyMessage from "@/component/CompanyMessage";
import Layout from "@/component/Layout";
import MenuItem from "@/component/MenuItem";
import { CategoryMenuStyles } from "@/style/Home.styles";

const categoryItems: CategoryItemProps[] = [
    {
        img: headphones, 
        newProduct: false,
        name: 'XX99 Mark II Headphones', 
        description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        href: 'asdf',
        reverse: false,
    },
    {
        img: headphones, 
        newProduct: false,
        name: 'XX99 Mark II Headphones 2', 
        description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        href: 'asdf',
        reverse: true,
    },
    {
        img: headphones, 
        newProduct: false,
        name: 'XX99 Mark II Headphones 3', 
        description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        href: 'asdf',
        reverse: false,
    },
];

export default function Earphones() {
    return (
        <Layout handleCartClick={function (): void {
            throw new Error("Function not implemented.");
        } }>
            <Banner text={"Earphones"} />
            <CategoryList categoryItems={categoryItems} />
            <CategoryMenuStyles>
                <MenuItem img={speakerImg} name='speakers' href='' />
                <MenuItem img={speakerImg} name='speakers' href='' />
                <MenuItem img={speakerImg} name='speakers' href='' />
            </CategoryMenuStyles>
            <CompanyMessage />
        </Layout>
    )
}
