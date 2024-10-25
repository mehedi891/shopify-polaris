import { BlockStack, Box, Button, ButtonGroup, Card, ChoiceList, DropZone, Icon, InlineCode, InlineStack, Layout, LegacyStack, Page, PageActions, Select, Text, TextField, Thumbnail } from '@shopify/polaris'
import {
    ChatIcon,
    ClipboardIcon,
    DeleteIcon,
    NoteIcon,
    SettingsIcon,
    StoreImportIcon,
    XIcon
} from '@shopify/polaris-icons';
import React, { useCallback, useState } from 'react'

function GeneralSettings() {

    const [priceDisplayVtitle, setPriceDisplayVtitle] = useState(0);
    const handlePriceDisplayVtitle = useCallback((index) => {
        if (priceDisplayVtitle === index) return
        setPriceDisplayVtitle(index)
    }, [priceDisplayVtitle]);
    const [priceDisplayPositionSelect, setPriceDisplayPositionSelect] = useState('bottom');
    const handlePriceDisplayPositionSelect = useCallback((value) => {
        setPriceDisplayPositionSelect(value);
    }, []);



    const [redirectAfterAddCart, setRedirectAfterAddCart] = useState('redirectTocart');
    const handleRedirectAfterAddCart = useCallback((value) => {
        setRedirectAfterAddCart(value)
    }, []);


    //out of stock image get
    const [stockOutFile, setStockOutFile] = useState();
    const handleStockOutFile = useCallback((_dropFiles, acceptedFiles, _rejectedFiles) => {
        setStockOutFile(acceptedFiles[0]);
    }, []);

    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    const fileUpload = !stockOutFile && <div style={{ width: '100%', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><DropZone.FileUpload actionTitle='Upload Out of stock badge' actionHint="Accepts .gif, .jpg, and .png" /></div>;

    const uploadedFile = stockOutFile && (
        <Box>
            <Thumbnail
                size="large"

                alt={stockOutFile.name}
                source={
                    validImageTypes.includes(stockOutFile.type)
                        ? window.URL.createObjectURL(stockOutFile)
                        : NoteIcon
                }
            />
            <div>
                {stockOutFile.name}{' '}
                <Text variant="bodySm" as="p">
                    {stockOutFile.size} bytes
                </Text>
            </div>
        </Box>
    );



    const fasterLoadScriptValue = `<!-- Multivariants app code start [ https://apps.shopify.com/multivariants ] --> <div id="MULTIVARIANTS APP SECTION PLACE"></div> <script type="text/javascript" src="https://sapp.multivariants.com/gate/out/sys/js/init.js?shop=efoll- supports.myshopify.com&product id=([product.id)}&locale=((shop.locale))"></script> <-- Multivariants App code end -->
`;


    const [fasterLoadScript, setFasterLoadScript] = useState(fasterLoadScriptValue);

    const handleFasterLoadCopy = () => {
        navigator.clipboard.writeText(fasterLoadScript).then(() => {
            shopify.toast.show('Faster Load Script Copied Successfully', {
                duration: 2000,
            });
        }).catch((error) => {
            console.log(error)
        })
    }



    const [stickyAddToCartBtnEna, setStickyAddToCartBtnEna] = useState(1);

    const handleStickyAddToCartBtnEna = useCallback((index) => {
        if (stickyAddToCartBtnEna === index) return
        setStickyAddToCartBtnEna(index);
    }, [stickyAddToCartBtnEna]);


    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>

                    <Box paddingBlockEnd={'400'}>

                        <Box maxWidth='200px'>
                            <InlineStack blockAlign='center' align='start' as='div'>
                                <Text as='h2' variant='headingLg'>General Settings</Text>
                                <Icon source={SettingsIcon} tone='info'>
                                </Icon>
                            </InlineStack>
                        </Box>



                    </Box>

                    <Box paddingBlockEnd={'400'}>
                        <Card>
                            <Box maxWidth='200px' paddingBlockEnd={'200'}>
                                <InlineStack blockAlign='center' align='start' as='div'>
                                    <Text as='h3' variant='headingMd'>Global Cart Restrictions</Text>
                                    <Icon source={ChatIcon} tone='info'>
                                    </Icon>
                                </InlineStack>
                            </Box>
                            <Text variant='bodySm'>Variant total price display and price display conditions</Text>

                            <Box paddingBlockStart={'400'} paddingBlockEnd={'400'}>
                                <BlockStack gap={'500'}>
                                    <InlineStack align='space-between'>

                                        <TextField
                                            type='number'
                                            label='Maximum Quantity'
                                            value='0'
                                            onChange={() => { }}

                                        />


                                        <TextField

                                            type='number'
                                            label='Maximum Items'
                                            value='0'
                                            onChange={() => { }}

                                        />


                                        <TextField

                                            type='number'
                                            label='Maximum Order Value'
                                            value='0'
                                            onChange={() => { }}

                                        />

                                    </InlineStack>



                                    <InlineStack align='space-between'>

                                        <TextField

                                            type='number'
                                            label='Minimum Quantity'
                                            value='0'
                                            onChange={() => { }}

                                        />


                                        <TextField

                                            type='number'
                                            label='Minimum Items'
                                            value='0'
                                            onChange={() => { }}

                                        />


                                        <TextField

                                            type='number'
                                            label='Minimum Order Value'
                                            value='0'
                                            onChange={() => { }}

                                        />


                                    </InlineStack>
                                </BlockStack>
                            </Box>


                        </Card>
                    </Box>


                    <Box paddingBlockEnd={'400'}>
                        <Card>
                            <Box maxWidth='200px' paddingBlockEnd={'200'}>
                                <InlineStack blockAlign='center' align='start' as='div'>
                                    <Text as='h3' variant='headingMd'>Price Display Settings</Text>
                                    <Icon source={ChatIcon} tone='info'>
                                    </Icon>
                                </InlineStack>
                            </Box>
                            <Text variant='bodySm'>Variant total price display options and price display conditions</Text>

                            <Box paddingBlockStart={'500'}>
                                <BlockStack gap={'400'}>

                                    <Box>
                                        <BlockStack gap={'200'}>
                                            <Text variant='headingMd' as='h4'>Want to Show variant option title?</Text>
                                            <ButtonGroup variant='segmented'>

                                                <Button
                                                    pressed={priceDisplayVtitle === 0}
                                                    onClick={() => handlePriceDisplayVtitle(0)}
                                                >Show</Button>

                                                <Button
                                                    pressed={priceDisplayVtitle === 1}
                                                    onClick={() => handlePriceDisplayVtitle(1)}
                                                >Hide</Button>


                                                <Button
                                                    pressed={priceDisplayVtitle === 2}
                                                    onClick={() => handlePriceDisplayVtitle(2)}
                                                >Replace Existing</Button>



                                            </ButtonGroup>
                                        </BlockStack>

                                    </Box>

                                    <Box>
                                        <BlockStack gap={'400'}>
                                            <BlockStack gap={'100'}>
                                                <Text variant='headingMd' as='h4'>Position</Text>
                                                <ChoiceList
                                                    selected={priceDisplayPositionSelect}
                                                    choices={[
                                                        { label: 'Top', value: 'top' },
                                                        { label: 'Bottom', value: 'bottom' },

                                                    ]}
                                                    onChange={handlePriceDisplayPositionSelect}

                                                />

                                            </BlockStack>


                                            <Box paddingBlockEnd={'500'}>
                                                <BlockStack gap={'200'}>
                                                    <Text variant='headingMd' as='h4'>Label before price</Text>


                                                    <InlineStack align='space-between'>
                                                        <Box minWidth='87%'>
                                                            <TextField

                                                                placeholder='{Total Price title}'
                                                                // value="Checkout"
                                                                onChange={() => { }}
                                                            />
                                                        </Box>
                                                        <Button variant='secondary' tone='success'>Default</Button>
                                                    </InlineStack>

                                                </BlockStack>
                                            </Box>


                                        </BlockStack>
                                    </Box>

                                </BlockStack>
                            </Box>


                        </Card>
                    </Box>



                    <Box paddingBlockEnd={'400'}>
                        <Card>
                            <Box maxWidth='max-content' paddingBlockEnd={'200'}>
                                <InlineStack blockAlign='center' align='start' as='div' gap={'100'}>
                                    <Text as='h3' variant='headingMd'>Action after adding Product to the cart</Text>
                                    <Icon source={ChatIcon} tone='info'>
                                    </Icon>
                                </InlineStack>
                            </Box>
                            <Text variant='bodySm'>Redirect Settings after adding to cart</Text>

                            <Box paddingBlockStart={'400'} paddingBlockEnd={'400'}>
                                <ChoiceList
                                    selected={redirectAfterAddCart}
                                    onChange={handleRedirectAfterAddCart}
                                    choices={[
                                        { label: 'Redirect to cart page', value: 'redirectTocart' },
                                        { label: 'Refresh Page', value: 'refreshPage' },
                                        { label: 'Stay on the page and reload the Multivariants section', value: 'reloadMvsection' },
                                    ]}
                                />
                            </Box>


                        </Card>
                    </Box>



                    <Box paddingBlockEnd={'400'}>
                        <Card>
                            <Box maxWidth='max-content' paddingBlockEnd={'200'}>

                                <InlineStack blockAlign='center' align='start' as='div' gap={'100'}>
                                    <Icon source={StoreImportIcon} tone='info' />
                                    <Text as='h3' variant='headingMd'>Custom "Out of Stock" badge</Text>
                                    <Icon source={ChatIcon} tone='info' />

                                </InlineStack>
                            </Box>
                            <Text variant='bodySm'>Upload custom icons for out-of-stock items.Selecting a language allows you to upload a different icon for each language.</Text>

                            <Box paddingBlockStart={'400'} paddingBlockEnd={'400'}>

                                <InlineStack align='space-between' blockAlign='center'>
                                    <Box maxWidth='30%'>
                                        <Select
                                            label='Choose Language'
                                            options={[
                                                { label: 'English', value: 'english' },
                                                { label: 'Bangla', value: 'bangla' },
                                                { label: 'Arabi', value: 'arabi' },
                                            ]}
                                        />
                                    </Box>

                                    <Box minWidth='60%'>
                                        <DropZone allowMultiple={false} onDrop={handleStockOutFile}>
                                            {uploadedFile}
                                            {fileUpload}
                                        </DropZone>
                                    </Box>

                                </InlineStack>

                            </Box>


                        </Card>
                    </Box>

                    <Box paddingBlockEnd={'400'}>
                        <Card>
                            <Box maxWidth='max-content' paddingBlockEnd={'200'}>
                                <InlineStack blockAlign='center' align='start' as='div' gap={'100'}>
                                    <Text as='h3' variant='headingMd'>Faster app loading & Placement</Text>
                                    <Icon source={ChatIcon} tone='info'>
                                    </Icon>
                                </InlineStack>
                            </Box>

                            <BlockStack gap={'200'}>
                                <Text variant='headingXs'>Speedup the app loading time and change variants default placement.</Text>
                                <Text variant='bodyXs'>Do you see the default "Add to Cart" button before the MultiVariants load? Copy this code and add it to your product page template, just before the <Text as="span"><InlineCode>{'<form> or {% form %) '}</InlineCode>tag.</Text>

                                </Text>
                            </BlockStack>


                            <Box>

                                <Box paddingBlock={'300'}>

                                    <TextField

                                        type='text'
                                        name='mvFasterLoad'
                                        value={fasterLoadScript}
                                        multiline={6}
                                        readOnly



                                    />





                                </Box>

                                <InlineStack align='end'>
                                    <Button variant='primary' icon={ClipboardIcon} size='large' onClick={handleFasterLoadCopy}>Copy Script</Button>
                                </InlineStack>


                            </Box>

                        </Card>
                    </Box>



                    <Box paddingBlockEnd={'400'}>
                        <Card>
                            <Box maxWidth='max-content' paddingBlockEnd={'200'}>
                                <InlineStack blockAlign='center' align='start' as='div' gap={'100'}>
                                    <Text as='h3' variant='headingMd'>Clear the product cache data</Text>
                                    <Icon source={ChatIcon} tone='info'>
                                    </Icon>
                                </InlineStack>
                            </Box>
                            <Text variant='bodySm'>When you update/change your product data like price using a CSV file or 3rd party app. Cached product data must be deleted.</Text>

                            <Box paddingBlockStart={'500'} paddingBlockEnd={'300'}>
                                <Button icon={XIcon} size='large'>Clear Product Data/Cache</Button>
                            </Box>




                        </Card>
                    </Box>

                    <Box paddingBlockEnd={'400'}>
                        <Card>
                            <Box maxWidth='max-content' paddingBlockEnd={'200'}>
                                <InlineStack blockAlign='center' align='start' as='div' gap={'100'}>
                                    <Text as='h3' variant='headingMd'>Sticky “Add To Cart”</Text>
                                    <Icon source={ChatIcon} tone='info'>
                                    </Icon>
                                </InlineStack>
                            </Box>
                            <Text variant='bodySm'>If you Enabled this feature then the “Add to cart” button and the checkout button along with the alert will be always on the screen and the customer won’t need to scroll down to find the Add to cart button.</Text>

                            <Box paddingBlockStart={'300'} paddingBlockEnd={'200'}>
                                <ButtonGroup variant='segmented'>
                                    <Button
                                        onClick={() => handleStickyAddToCartBtnEna(0)}
                                        pressed={stickyAddToCartBtnEna === 0}
                                    >Enable</Button>
                                    <Button
                                        onClick={() => handleStickyAddToCartBtnEna(1)}
                                        pressed={stickyAddToCartBtnEna === 1}
                                    >Disable</Button>
                                </ButtonGroup>
                            </Box>






                        </Card>
                    </Box>

                    <PageActions

                        primaryAction={<Button variant='primary' size='large'>Save All Changes</Button>}
                    />



                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default GeneralSettings