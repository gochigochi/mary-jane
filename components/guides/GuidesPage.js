import SmallCtaBlue from '../buttons/SmallCtaBlue'
import {
    HeadSection,
    HeadBg,
    Inner,
    DoubleGrid,
    Card,
    Box,
    MainTitle,
    Text,
    FeaturedTitleContainer,
    FeaturedTitle,
    FeaturedText,
    ButtonContainer,
    SimpleGrid,
    SectionHeader,
    SectionIconContainer,
    SectionIcon,
    RegularTitle,
    BigSectionFilesGrid,
    SmallSectionFilesGrid,
    FileContainer,
    FileIconContainer,
    FileIcon,
    FileName,
    Circle,
    LogoContainer,
    Logo,
    Left,
    Right,
    Dot,
    DotIcon,
} from './Elements'

const GuidesPage = ({ content }) => {

    const getArray = (object) => {
        return Object.keys(object).map(key => {
            return { ...object[key] }
        })
    }

    return (
        <>
            <HeadSection>
                <HeadBg src={content.headerBackgroundImage.sourceUrl} alt="" fill />
            </HeadSection>
            <Inner>
                <DoubleGrid>
                    <Box>
                        <MainTitle>{content.headerSection.title}</MainTitle>
                        <Text>{content.headerSection.text}</Text>
                    </Box>
                    <Card>
                        <FeaturedTitleContainer />
                        <FeaturedTitle>{content.headerSection.cardTitle}</FeaturedTitle>
                        <FeaturedText>{content.headerSection.cardText}</FeaturedText>
                        <ButtonContainer href={content.headerSection.cardCta.url}>
                            <SmallCtaBlue>{content.headerSection.cardCta.text}</SmallCtaBlue>
                        </ButtonContainer>
                    </Card>
                </DoubleGrid>
                <SimpleGrid>
                    <Card>
                        <SectionHeader>
                            <SectionIconContainer>
                                <SectionIcon src={content.generalDocuments.icon.sourceUrl} alt="" fill />
                            </SectionIconContainer>
                            <RegularTitle>{content.generalDocuments.title}</RegularTitle>
                        </SectionHeader>
                        <BigSectionFilesGrid>
                            {
                                getArray(content.generalDocuments.files).map(file => {
                                    return (
                                        <FileContainer href={file.url} target="_blank" rel="noopener noreferrer" download>
                                            <FileIconContainer>
                                                <FileIcon src="/icons/guides/file-pdf.png" alt="" fill />
                                            </FileIconContainer>
                                            <FileName>{file.name}</FileName>
                                        </FileContainer>
                                    )
                                })
                            }
                        </BigSectionFilesGrid>
                    </Card>
                </SimpleGrid>
                <DoubleGrid>
                    <Card>
                        <SectionHeader>
                            <SectionIconContainer>
                                <SectionIcon src={content.materials.icon.sourceUrl} alt="" fill />
                            </SectionIconContainer>
                            <RegularTitle>{content.materials.title}</RegularTitle>
                        </SectionHeader>
                        <SmallSectionFilesGrid>
                            {
                                getArray(content.materials.files).map(file => {
                                    return (
                                        <FileContainer href={file.url} target="_blank" rel="noopener noreferrer" download>
                                            <FileIconContainer>
                                                <FileIcon src="/icons/guides/file-pdf.png" alt="" fill />
                                            </FileIconContainer>
                                            <FileName>{file.name}</FileName>
                                        </FileContainer>
                                    )
                                })
                            }
                        </SmallSectionFilesGrid>
                    </Card>
                    <Card>
                        <SectionHeader>
                            <SectionIconContainer>
                                <SectionIcon src={content.plans.icon.sourceUrl} alt="" fill />
                            </SectionIconContainer>
                            <RegularTitle>{content.plans.title}</RegularTitle>
                        </SectionHeader>
                        <SmallSectionFilesGrid>
                            {
                                getArray(content.plans.files).map(file => {
                                    return (
                                        <FileContainer href={file.url} target="_blank" rel="noopener noreferrer" download>
                                            <FileIconContainer>
                                                <FileIcon src="/icons/guides/file-pdf.png" alt="" fill />
                                            </FileIconContainer>
                                            <FileName>{file.name}</FileName>
                                        </FileContainer>
                                    )
                                })
                            }
                        </SmallSectionFilesGrid>
                    </Card>
                </DoubleGrid>
                <SimpleGrid>
                    <Card>
                        <SectionHeader>
                            <SectionIconContainer>
                                <SectionIcon src={content.techSpecification.icon.sourceUrl} alt="" fill />
                            </SectionIconContainer>
                            <RegularTitle>{content.techSpecification.title}</RegularTitle>
                        </SectionHeader>
                        <BigSectionFilesGrid>
                            {
                                getArray(content.techSpecification.files).map(file => {
                                    return (
                                        <FileContainer href={file.url} target="_blank" rel="noopener noreferrer" download>
                                            <FileIconContainer>
                                                <FileIcon src="/icons/guides/file-pdf.png" alt="" fill />
                                            </FileIconContainer>
                                            <FileName>{file.name}</FileName>
                                        </FileContainer>
                                    )
                                })
                            }
                        </BigSectionFilesGrid>
                    </Card>
                </SimpleGrid>
                <DoubleGrid>
                    <Card>
                        <SectionHeader>
                            <SectionIconContainer>
                                <SectionIcon src={content.shipping.icon.sourceUrl} alt="" fill />
                            </SectionIconContainer>
                            <RegularTitle>{content.shipping.title}</RegularTitle>
                        </SectionHeader>
                        <SmallSectionFilesGrid>
                            {
                                getArray(content.shipping.files).map(file => {
                                    return (
                                        <FileContainer href={file.url} target="_blank" rel="noopener noreferrer" download>
                                            <FileIconContainer>
                                                <FileIcon src="/icons/guides/file-pdf.png" alt="" fill />
                                            </FileIconContainer>
                                            <FileName>{file.name}</FileName>
                                        </FileContainer>
                                    )
                                })
                            }
                        </SmallSectionFilesGrid>
                    </Card>
                    <Card>
                        <SectionHeader>
                            <SectionIconContainer>
                                <SectionIcon src={content.furniture.icon.sourceUrl} alt="" fill />
                            </SectionIconContainer>
                            <RegularTitle>{content.furniture.title}</RegularTitle>
                        </SectionHeader>
                        <SmallSectionFilesGrid>
                            {
                                getArray(content.furniture.files).map(file => {
                                    return (
                                        <FileContainer href={file.url} target="_blank" rel="noopener noreferrer" download>
                                            <FileIconContainer>
                                                <FileIcon src="/icons/guides/file-pdf.png" alt="" fill />
                                            </FileIconContainer>
                                            <FileName>{file.name}</FileName>
                                        </FileContainer>
                                    )
                                })
                            }
                        </SmallSectionFilesGrid>
                    </Card>
                </DoubleGrid>
                <SimpleGrid>
                    <Card>
                        <Circle />
                        <DoubleGrid>
                            <Left>
                                <Dot>
                                    <DotIcon src="/icons/info-icon.png" alt="information icon" fill />
                                </Dot>
                                <Text dangerouslySetInnerHTML={{ __html: content.contact}} />
                            </Left>
                            <Right>
                                <LogoContainer>
                                    <Logo src="/logos/logo-light-green.png" alt="" fill />
                                </LogoContainer>
                            </Right>
                        </DoubleGrid>
                    </Card>
                </SimpleGrid>
            </Inner>
        </>
    )
}

export default GuidesPage