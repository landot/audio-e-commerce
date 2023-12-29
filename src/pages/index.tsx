import HeroSection from '@/component/HeroSection'
import Layout from '@/component/Layout'
import MenuItem from '@/component/MenuItem'
import { CategoryMenuStyles, HomeContentStyles, HomeStyles } from '@/style/Home.styles'
import Head from 'next/head'
import speakerImg from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import Promotion from '@/component/Promotion'
import CompanyMessage from '@/component/CompanyMessage'

export default function Home() {
    return (
        <>
            <Head>
                <title>E-Commerce Site</title>
                <meta name="description" content="Fictional E-commerce website for audio equipment" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
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
            </main>
        </>
    )
}