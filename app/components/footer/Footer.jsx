import { BlockStack, Box, Button, CalloutCard, Card, Grid, InlineGrid, InlineStack, Layout, Link, MediaCard, Page, Pagination, Text } from '@shopify/polaris'
import React from 'react'

import {
    CalendarTimeIcon,
    EmailIcon,
    QuestionCircleIcon,
    SendIcon
  } from '@shopify/polaris-icons';
import FooterMv from './footermv/FooterMv';

function Footer() {
    return (
        <Page fullWidth>
            <Layout>

          
        <Layout.Section>
            <Box paddingBlock={'1600'}>
                <Text as='h2' variant='headingLg' >Recommended Shopify Apps</Text>

                <Box paddingBlock={'800'}>



                    <BlockStack as='div'>
                        <InlineGrid columns={3} gap={'300'}>
                            <Card>
                                <InlineStack align='start' blockAlign='center'>
                                    <img
                                        width='auto'
                                        height='52px'
                                        src="https://multivariants.com/wp-content/themes/multivariants/resources/images/MV.webp" alt="" />
                                    <Link url='https://multivariants.com' target='_blank'><Text as='p' variant='headingSm' tone='base'>Multivariants</Text></Link>
                                </InlineStack>
                                <Box paddingBlockStart={'300'}>
                                    <Text as='p' variant='bodySm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a eligendi libero amet non aut iste odit nisi. Sequi, qui nesciunt non pariatur in quasi veniam mollitia fugiat provident adipisci voluptatem totam deserunt cumque? Hic voluptates quae adipisci vitae aliquid?</Text>
                                </Box>

                            </Card>

                            <Card>
                            <InlineStack align='start' blockAlign='center'>
                                    <img
                                        width='auto'
                                        height='52px'
                                        src="https://multivariants.com/wp-content/themes/multivariants/resources/images/MV.webp" alt="" />
                                    <Link url='https://multivariants.com' target='_blank'><Text as='p' variant='headingSm' tone='base'>Inkybay - Product Customizer</Text></Link>
                                </InlineStack>
                                <Box paddingBlockStart={'300'}>
                                    <Text as='p' variant='bodySm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a eligendi libero amet non aut iste odit nisi. Sequi, qui nesciunt non pariatur in quasi veniam mollitia fugiat provident adipisci voluptatem totam deserunt cumque? Hic voluptates quae adipisci vitae aliquid?</Text>
                                </Box>

                            </Card>




                            <Card>
                            <InlineStack align='start' blockAlign='center'>
                                    <img
                                        width='auto'
                                        height='52px'
                                        src="https://multivariants.com/wp-content/themes/multivariants/resources/images/MV.webp" alt="" />
                                    <Link url='https://multivariants.com' target='_blank'><Text as='p' variant='headingSm' tone='base'>Multivariants</Text></Link>
                                </InlineStack>
                                <Box paddingBlockStart={'300'}>
                                    <Text as='p' variant='bodySm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a eligendi libero amet non aut iste odit nisi. Sequi, qui nesciunt non pariatur in quasi veniam mollitia fugiat provident adipisci voluptatem totam deserunt cumque? Hic voluptates quae adipisci vitae aliquid?</Text>
                                </Box>

                            </Card>




                        </InlineGrid>
                    </BlockStack>
                    <Box paddingBlockStart={'300'}>
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


            </Box>


            <Box paddingBlock={'1000'}>
            <Card roundedAbove='md'>
                <Text as='h3' variant='headingLg'>Need help at 3 AM?</Text>
                <Box paddingBlock={'300'}>
                <Text as='p' variant='bodyMd'>Our team of skilled is on <Text as='span' variant='headingMd'>24/7</Text> standby to response to your inquires promtly,no matter the time zone</Text>
                </Box>

                <InlineStack gap={'300'}>
                    <Button variant='secondary' icon={QuestionCircleIcon} size='large'>Get Instant Support</Button>
                    <Button variant='secondary' icon={CalendarTimeIcon} size='large'>Schedule a Call</Button>
                    <Button variant='secondary' icon={EmailIcon} size='large'>Reach Through Email</Button>
                    <Button variant='secondary' icon={SendIcon} size='large'>Reach Through Ticket</Button>
                </InlineStack>

            </Card>
            </Box>

            <FooterMv></FooterMv>

        </Layout.Section>
        </Layout>
        </Page>
    )
}

export default Footer