import { useState, useEffect } from 'react'
import {
    HeadSection,
    HeadBg,
    Content,
    Inner,
    InnerHead,
    Title,
    InputsContainer,
    Search,
    Grid,
    GridItem,
    LogoContainer,
    Logo,
    Categories,
    CategoriesContainer,
    Categorie,
    ChevronContainer,
    MobileInputs,
    MobileCat,
    MobileSearch,
    SearchIcon,
    CatPopupContainer,
    MobileCategoriesContainer,
    PlaceHolderText,
    PlaceHolderLogo
} from './Elements'
import BackToTopButton from '../backToTopButton/BackToTopButton'

const ExhibitorsGridPage = ({ content, exhibitors }) => {

    const [exhibitorsState, setExhibitorsState] = useState([])
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
    const [mobileCatOpen, setMobileCatOpen] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [hiddenTitle, setHiddenTitle] = useState(false)
    const [currentCategory, setCurrentCategory] = useState("all")
    const [openCategories, setOpenCategories] = useState(false)
    const [currentExhibitors, setCurrentExhibitors] = useState([])
    const [loading, setLoading] = useState(false)

    const categories = Object.keys(content.categories).map(key => {
        return { ...content.categories[key] }
    })

    const observeClicks = (e) => !e.target.className.includes("cat-btn") && setOpenCategories(false)

    useEffect(() => {
        setLoading(true)
        window.addEventListener('click', observeClicks)
        setTimeout(() => setLoading(false), 2500)
        setExhibitorsState(exhibitors)
        setCurrentExhibitors(exhibitors)

        return () => window.removeEventListener('click', observeClicks)
    }, [])

    useEffect(() => {

        if (searchValue.length !== 0) {

            console.log(searchValue)

            const filtered = exhibitorsState.filter(exhibitor => {
                if (exhibitor.node.title.toLowerCase().includes(searchValue.toLowerCase())) return exhibitor
            })

            console.log(filtered)

            setCurrentExhibitors(filtered)

        } else {

            setCurrentExhibitors(exhibitors)
        }

    }, [searchValue])

    useEffect(() => {
        setSearchValue("")

        if (currentCategory === "all") {
            setCurrentExhibitors(exhibitors)
        } else {
            const filtered = exhibitorsState.filter(exhibitor => {
                if (exhibitor.node.category.includes(currentCategory)) return exhibitor
            })

            setCurrentExhibitors(filtered)
        }

    }, [currentCategory])

    const handleInput = (e) => setSearchValue(e.target.value)

    const handleOpen = () => setOpenCategories(!openCategories)

    const handleClick = (value) => {
        setCurrentCategory(value)
    }

    const handleMobileClick = (value) => {
        setMobileCatOpen(false)
        setCurrentCategory(value)
    }

    const handleFocus = () => {
        setMobileSearchOpen(true)
        setHiddenTitle(true)
    }

    const handleBlur = () => {
        setMobileSearchOpen(false)
        setTimeout(() => {
            setHiddenTitle(false)
        }, 400)
    }

    return (
        <>
            <HeadSection>
                <HeadBg src="/images/exhibitors-grid-page-bg.png" fill />
            </HeadSection>
            <Content>
                <Inner>
                    <InnerHead>
                        <Title hidden={hiddenTitle}>{content.title}</Title>
                        <InputsContainer>
                            <Categories className="cat-btn" onClick={handleOpen}>
                                {content.categoryInputPlaceholder}
                                <ChevronContainer open={openCategories}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                                        <g id="Arrow / Chevron_Down">
                                            <path id="Vector" d="M19 9L12 16L5 9" stroke="#aeaeae" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                </ChevronContainer>
                                <CategoriesContainer open={openCategories}>
                                    {
                                        categories.map(category => {
                                            return (
                                                <Categorie onClick={() => handleClick(category.value)} className="cat-btn" >{category.name}</Categorie>
                                            )
                                        })
                                    }
                                </CategoriesContainer>
                            </Categories>
                            <Search onChange={handleInput} type="text" placeholder={content.searchInputPlaceholder} />
                        </InputsContainer>
                        <MobileInputs opened={mobileSearchOpen}>
                            <MobileCat
                                hidden={hiddenTitle}
                                onClick={() => setMobileCatOpen(true)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                                    <g id="Iconly/Curved/Category">
                                        <g id="Category">
                                            <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M21.0003 6.6738C21.0003 8.7024 19.3551 10.3476 17.3265 10.3476C15.2979 10.3476 13.6536 8.7024 13.6536 6.6738C13.6536 4.6452 15.2979 3 17.3265 3C19.3551 3 21.0003 4.6452 21.0003 6.6738Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M10.3467 6.6738C10.3467 8.7024 8.7024 10.3476 6.6729 10.3476C4.6452 10.3476 3 8.7024 3 6.6738C3 4.6452 4.6452 3 6.6729 3C8.7024 3 10.3467 4.6452 10.3467 6.6738Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Stroke 5" fill-rule="evenodd" clip-rule="evenodd" d="M21.0003 17.2619C21.0003 19.2905 19.3551 20.9348 17.3265 20.9348C15.2979 20.9348 13.6536 19.2905 13.6536 17.2619C13.6536 15.2333 15.2979 13.5881 17.3265 13.5881C19.3551 13.5881 21.0003 15.2333 21.0003 17.2619Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Stroke 7" fill-rule="evenodd" clip-rule="evenodd" d="M10.3467 17.2619C10.3467 19.2905 8.7024 20.9348 6.6729 20.9348C4.6452 20.9348 3 19.2905 3 17.2619C3 15.2333 4.6452 13.5881 6.6729 13.5881C8.7024 13.5881 10.3467 15.2333 10.3467 17.2619Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </g>
                                </svg>
                            </MobileCat>
                            <MobileSearch
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                opened={mobileSearchOpen}
                                onChange={handleInput} type="text"
                                style={{ fontSize: '18px' }}
                            />
                            <SearchIcon hidden={hiddenTitle}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                                    <g id="Interface / Search_Magnifying_Glass">
                                        <path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </SearchIcon>
                        </MobileInputs>
                        {
                            mobileCatOpen ?
                                <CatPopupContainer>
                                    <MobileCategoriesContainer open={openCategories}>
                                        {
                                            categories.map(category => {
                                                return (
                                                    <Categorie onClick={() => handleMobileClick(category.value)} className="cat-btn" >{category.name}</Categorie>
                                                )
                                            })
                                        }
                                    </MobileCategoriesContainer>
                                </CatPopupContainer> : null
                        }
                    </InnerHead>
                    <Grid>
                        {currentExhibitors.map((exhibitor, index) => {
                            return (
                                <GridItem key={index}>
                                    <LogoContainer href={exhibitor.node.uri} loading={loading} iswhitelogo={exhibitor.node.isWhiteLogo}>
                                        {
                                            exhibitor.node.hasNoLogo ?
                                            <>
                                                <PlaceHolderText>{exhibitor.node.title}</PlaceHolderText>
                                                <PlaceHolderLogo src="/images/exhibitor-placeholder.png" alt={exhibitor.node.title} fill isLoading={loading} priority /> 
                                            </> :
                                            <Logo src={exhibitor.node.logo.sourceUrl} alt={exhibitor.node.title} fill isLoading={loading} priority />
                                        }
                                    </LogoContainer>
                                </GridItem>
                            )
                        })}
                    </Grid>
                </Inner>
            </Content>
            <BackToTopButton />
        </>
    )
}

export default ExhibitorsGridPage