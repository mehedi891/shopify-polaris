import { BlockStack, Box, Button, ButtonGroup, ColorPicker, InlineStack, RangeSlider, Text, TextField } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'

function CustomizationAddtoCart() {

    const [cusAddTocartBtnActive, setCusAddTocartBtnActive] = useState(0);
    const handleCusAddTocartBtnActive = useCallback((index) => {
        if (cusAddTocartBtnActive === index) return

        setCusAddTocartBtnActive(index);

    }, [cusAddTocartBtnActive]);



    const [cusAddTocheckoutBtnActive, setCusAddTocheckoutBtnActive] = useState(1);
    const handleCusAddTocheckoutBtnActive = useCallback((index) => {
        if (cusAddTocheckoutBtnActive === index) return

        setCusAddTocheckoutBtnActive(index);

    }, [cusAddTocheckoutBtnActive]);




    const [cusShopifyFormHide, setCusShopifyFormHide] = useState(0);
    const handleCusShopifyFormHide = useCallback((index) => {
        if (cusShopifyFormHide === index) return

        setCusShopifyFormHide(index);

    }, [cusShopifyFormHide]);


    const [addToCartBtnColor, setAddToCartBtnColor] = useState({
        hue: 300,
        brightness: 1,
        saturation: 0.7,
        alpha: 0.7,
    });
    //console.log(addToCartBtnColor)


    const [cusTextSize, setCusTextSize] = useState(0);
    const handlecusTexSize = useCallback((value) => {
        setCusTextSize(value);
    }, []);

    //console.log(cusTextSize)


    const [cusTextColor, setCusTextColor] = useState({
        hue: 300,
        brightness: 1,
        saturation: 0.7,
        alpha: 0.7,
    });




    const [cusBorderRadius, setCusBorderRadius] = useState(0);
    const handleCusBorderRadius = useCallback((value) => {
        setCusBorderRadius(value);
    }, []);




    return (
        <>

            <Box 

                background='bg'
                padding={'300'}
                borderRadius='200'
            
            >
                <Box paddingBlockEnd={'400'}>
                    <BlockStack gap={'200'}>
                        <Box>
                            <Text variant='headingMd' as='h3'>Want to show To Cart Button?</Text>
                        </Box>
                        <ButtonGroup variant='segmented'>
                            <Button
                                pressed={cusAddTocartBtnActive === 0}
                                onClick={() => handleCusAddTocartBtnActive(0)}

                            >Yes</Button>
                            <Button
                                pressed={cusAddTocartBtnActive === 1}
                                onClick={() => handleCusAddTocartBtnActive(1)}
                            >No</Button>
                        </ButtonGroup>
                    </BlockStack>
                </Box>


                <Box paddingBlockEnd={'400'}>
                    <BlockStack gap={'200'}>
                        <Box>
                            <Text variant='headingMd' as='h3'>Want to show Checkout Button?</Text>
                        </Box>
                        <ButtonGroup variant='segmented'>
                            <Button
                                pressed={cusAddTocheckoutBtnActive === 0}
                                onClick={() => handleCusAddTocheckoutBtnActive(0)}

                            >Yes</Button>
                            <Button
                                pressed={cusAddTocheckoutBtnActive === 1}
                                onClick={() => handleCusAddTocheckoutBtnActive(1)}
                            >No</Button>
                        </ButtonGroup>
                    </BlockStack>
                </Box>


                <Box paddingBlockEnd={'400'}>
                    <BlockStack gap={'200'}>
                        <Box>
                            <Text variant='headingMd' as='h3'>Want to Hide Shopify default Add To cart Form?</Text>
                        </Box>
                        <ButtonGroup variant='segmented'>
                            <Button
                                pressed={cusShopifyFormHide === 0}
                                onClick={() => handleCusShopifyFormHide(0)}

                            >Yes</Button>
                            <Button
                                pressed={cusShopifyFormHide === 1}
                                onClick={() => handleCusShopifyFormHide(1)}
                            >No</Button>
                        </ButtonGroup>
                    </BlockStack>
                </Box>

                <Box paddingBlockEnd={'400'}>

                    <Box>
                        <InlineStack align='space-between' blockAlign='center'>
                            <Text variant='headingMd' as='h3'>Button Color</Text>


                            <ColorPicker color={addToCartBtnColor} onChange={setAddToCartBtnColor} allowAlpha={true} />


                        </InlineStack>
                    </Box>

                </Box>

                <Box paddingBlockEnd={'400'}>

                    <Box>
                        <BlockStack gap={'300'}>
                            <Text variant='headingMd' as='h3'>Text Size (Px)</Text>

                            <InlineStack blockAlign='center'>
                                <Box minWidth='85%'>
                                    <RangeSlider value={cusTextSize} onChange={handlecusTexSize} min={5} max={100} />
                                </Box>


                                <Box minWidth='10%'>

                                    <TextField
                                        autoSize
                                        value={cusTextSize}
                                        name='cusTextSize'
                                        type='text'
                                        readOnly

                                        tone='magic'
                                        variant='borderless'

                                    />

                                </Box>



                            </InlineStack>
                        </BlockStack>
                    </Box>

                </Box>


                <Box paddingBlockEnd={'400'}>

                    <Box>
                        <InlineStack align='space-between' blockAlign='center'>
                            <Text variant='headingMd' as='h3'>Text Color</Text>


                            <ColorPicker color={cusTextColor} onChange={setCusTextColor} allowAlpha={true} />


                        </InlineStack>
                    </Box>

                </Box>


                <Box paddingBlockEnd={'400'}>

                    <Box>
                        <BlockStack gap={'300'}>
                            <Text variant='headingMd' as='h3'>Border Radius(Px)</Text>

                            <InlineStack blockAlign='center'>
                                <Box minWidth='85%'>
                                    <RangeSlider value={cusBorderRadius} onChange={handleCusBorderRadius} min={0} max={100} />
                                </Box>


                                <Box minWidth='10%'>

                                    <TextField
                                        autoSize
                                        value={cusBorderRadius}
                                        name='cusTBorderRadius'
                                        type='text'
                                        readOnly

                                        tone='magic'
                                        variant='borderless'

                                    />

                                </Box>



                            </InlineStack>
                        </BlockStack>
                    </Box>

                </Box>


            </Box>

        </>
    )
}

export default CustomizationAddtoCart