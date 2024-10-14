import { BlockStack, Box, Grid, Layout, MediaCard, Pagination } from '@shopify/polaris'
import React from 'react'

function Footer() {
    return (
        <Layout.Section variant='oneHalf'>
            <Box paddingBlock={'1600'}>
                <Grid>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                        <MediaCard
                            title="Inkybay - Product Personalizer"
                            description='Live product customization to simplify personalized product ordering. Custom size option with dynamic price generation! Support ANY printing methods-DTF, Screen Print, DTG, Sublimation, Embroidery,etc.'
                            size='small'

                        >
                        </MediaCard>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                        <MediaCard
                            title="Inkybay - Product Personalizer"
                            description='Live product customization to simplify personalized product ordering. Custom size option with dynamic price generation! Support ANY printing methods-DTF, Screen Print, DTG, Sublimation, Embroidery,etc.'
                            size='small'

                        >

                        </MediaCard>
                    </Grid.Cell>

                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                        <MediaCard
                            title="Inkybay - Product Personalizer"
                            description='Live product customization to simplify personalized product ordering. Custom size option with dynamic price generation! Support ANY printing methods-DTF, Screen Print, DTG, Sublimation, Embroidery,etc.'
                            size='small'

                        >

                        </MediaCard>
                    </Grid.Cell>
                </Grid>
                <Box paddingBlock={'800'}>
                    <BlockStack inlineAlign='center'>
                        <Pagination
                            hasPrevious
                            onPrevious={() => {
                                console.log('Previous');
                            }}
                            hasNext
                            onNext={() => {
                                console.log('Next');
                            }}
                        />
                    </BlockStack>
                </Box>


            </Box>

        </Layout.Section>
    )
}

export default Footer