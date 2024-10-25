import { BlockStack, Box, Button, Divider, InlineStack, Text } from '@shopify/polaris'
import React from 'react'

function Starterplan() {
    return (
        <Box>
            <Box background='bg-fill-tertiary' paddingBlock={'500'} borderStartEndRadius='200' borderStartStartRadius='200'>
                <InlineStack align='center' gap={'300'} direction={'column'} blockAlign='center'>
                    <Text as='h2' variant='heading2xl'>Starter (FREE)</Text>
                    <Text as='p' variant='headingLg'>FREE</Text>
                    <Button tone='success' size='large' variant='secondary' fullWidth={false}>Downgrade</Button>
                </InlineStack>
            </Box>
            <Divider />

            <Box paddingBlockStart={'300'} background='bg-fill-active' paddingInline={'200'}>
                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Display all variants with the quantity box for bulk order.</Text>
                        <Text as='p' variant='bodyLg'>Will show a combination of all options and values as a list on the product page.</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>


                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Variants image icon display</Text>
                        <Text as='p' variant='bodyLg'>WWill show all variants image icon</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>

                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Variants inventory check</Text>
                        <Text as='p' variant='bodyLg'>Will check inventory and allow maximum available quantity while adding to the cart.</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>


                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Variants Out of Stock badge</Text>
                        <Text as='p' variant='bodyLg'>It will show out of stock badge/sticker for items that are not available in stock.</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>


                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Show/hide the out of stock items</Text>
                        <Text as='p' variant='bodyLg'>Settings for show/hide the out of stock items in the front end.</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>


                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Default theme editing by CSS</Text>
                        <Text as='p' variant='bodyLg'>Customize elements display to match your store theme</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>



                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>MultiVariants Placement</Text>
                        <Text as='p' variant='bodyLg'>Move default placement of variants display by adding a simple code</Text>

                    </BlockStack>

                    <Box paddingBlockStart={'300'}><Divider /></Box>

                </Box>


                <Box paddingBlockEnd={'400'} paddingInline={'100'}>
                    <BlockStack gap={'100'}>
                        <Text as='strong' variant='headingMd'>Variants price display in unit/total</Text>
                        <Text as='p' variant='bodyLg'>Settings for individual variants price display.</Text>

                    </BlockStack>



                </Box>


               






            </Box>

            <Box background='bg-fill-tertiary' paddingBlock={'500'} borderEndEndRadius='200' borderEndStartRadius='200'>
                <InlineStack align='center' blockAlign='center'> <Button tone='success' size='large' variant='secondary' fullWidth={false}>Downgrade</Button></InlineStack>
            </Box>
        </Box>
    )
}

export default Starterplan