'use client'
import CompanyMessage from '@/component/CompanyMessage'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import HeroSection from '@/component/HeroSection'
import MenuItem from '@/component/MenuItem'
import Promotion from '@/component/Promotion'
import { HomeStyles, HomeContentStyles, CategoryMenuStyles } from '@/style/Home.styles'
import speakerImg from '../assets/shared/desktop/image-category-thumbnail-speakers.png';

export default function Page() {
    return (
        <HomeStyles>
            <Header handleCartClick={() => null} />
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
            <Footer />
        </HomeStyles>
    )
}