'use client'
import CompanyMessage from '@/component/CompanyMessage'
import HeroSection from '@/component/HeroSection'
import MenuItem from '@/component/MenuItem'
import Promotion from '@/component/Promotion'
import { HomeStyles, HomeContentStyles, CategoryMenuStyles } from '@/style/Home.styles'
import speakerImg from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import Layout from '@/component/Layout'

export default function Page() {
    return (
        <HomeStyles>
            <Layout handleCartClick={function (): void {
                throw new Error('Function not implemented.')
            } }>
                <HeroSection />
                <HomeContentStyles>
                    <CategoryMenuStyles>
                        <MenuItem img={speakerImg} name='speakers' href='' />
                        <MenuItem img={speakerImg} name='speakers' href='' />
                        <MenuItem img={speakerImg} name='speakers' href='' />
                    </CategoryMenuStyles>
                    <Promotion />
                    <CompanyMessage />
                </HomeContentStyles>
            </Layout>
        </HomeStyles>
    )
}