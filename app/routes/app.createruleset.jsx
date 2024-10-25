import { BlockStack, Box, Button, ButtonGroup, Card, ChoiceList, Divider, Icon, Image, InlineStack, Layout, Page, PageActions, Select, Text, TextField } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import {
    ChatIcon
} from '@shopify/polaris-icons';
import CustomBtnMv from '../components/createruleset/CustomBtnMv';
import { mvBtnList } from '../order-data.js';
import { json, useLoaderData } from '@remix-run/react';
import CustomizationAddtoCart from '../components/createruleset/CustomizationAddtoCart.jsx';
import gridView from '../images/gridView.png'
import Footer from '../components/footer/Footer.jsx';


export const loader = async () => {
    return json({ mvBtnList })
}

function CreateRuleset() {


    const { mvBtnList } = useLoaderData();


    const [rulesetName, setRulesetName] = useState('');
    const handleRulesetName = useCallback((value) => setRulesetName(value), []);

    const [selected, setSelected] = useState('allproducts');
    const [applyBy, setApplyBy] = useState('');
    const handleChoiceListTextField = useCallback((value) => setApplyBy(value), []);

    const renderChoiceListTextField = useCallback((isSelected) => (
        isSelected &&
        <TextField
            name='applyBy'
            onChange={handleChoiceListTextField}
            value={applyBy}
            type='text'
        />
    ), [handleChoiceListTextField, applyBy]);

    const [pdOneoptionSelected, setPdOneoptionSelected] = useState('list');
    const handlePdOneOption = useCallback((value) => setPdOneoptionSelected(value), []);


    const [pdTwoOptionSelectedFirst, setPdTwoOptionSelectedFirst] = useState('grid-matrix');
    const [pdTwoOptionSelectedSecond, setPdTwoOptionSelectedSecond] = useState('Swatch');
    const handleTwoOptionFrist = useCallback((value) => setPdTwoOptionSelectedFirst(value), []);
    const handleTwoOptionSecond = useCallback((value) => setPdTwoOptionSelectedSecond(value), []);



    const [pdThreeOptionSelectedFirst, setPdThreeOptionSelectedFirst] = useState('list');
    const [pdThreeOptionSelectedSecond, setPdThreeOptionSelectedSecond] = useState('Swatch');
    const [pdThreeOptionSelectedThird, setPdThreeOptionSelectedThird] = useState('grid-matrix');
    const handleThreeOptionFrist = useCallback((value) => setPdThreeOptionSelectedFirst(value), []);
    const handleThreeOptionSecond = useCallback((value) => setPdThreeOptionSelectedSecond(value), []);
    const handleThreeOptionThird = useCallback((value) => setPdThreeOptionSelectedThird(value), []);


    const [moreRestrictionShow, setMoreRestrictionShow] = useState(false);

    const handleShowMoreRestriction = useCallback(() => {
        setMoreRestrictionShow((moreRestrictionShow) => !moreRestrictionShow)
    }, []);


    const [moreSettingsAreaExpand, setMoreSettingsAreaExpand] = useState(false);



    const [showMoreSettingsCard, setShowMoreSettingsCard] = useState(false);
    const handleShowMoreSettingsCard = useCallback(() => {
        setShowMoreSettingsCard((showMoreSettingsCard) => !showMoreSettingsCard)
    }, []);


    const [variantCusTitleShow, setVariantCusTitleShow] = useState(0);
    const handleVariantCusTitleShow = useCallback((index) => {
        if (variantCusTitleShow === index) return
        setVariantCusTitleShow(index)
    }, [variantCusTitleShow]);


    const [checkoutCusTitleShow, setCheckoutCusTitleShow] = useState(1);
    const handleCheckoutCusTitleShow = useCallback((index) => {
        if (checkoutCusTitleShow === index) return
        setCheckoutCusTitleShow(index)
    }, [checkoutCusTitleShow]);



    const [cusMvStoreTitleShow, setCusMvStoreTitleShow] = useState(0);
    const handleCusMvStoreTitleShow = useCallback((index) => {
        if (cusMvStoreTitleShow === index) return
        setCusMvStoreTitleShow(index)
    }, [cusMvStoreTitleShow]);



    const [cusMvStoreSubTitleShow, setCusMvStoreSubTitleShow] = useState(1);
    const handleCusMvStoreSubTitleShow = useCallback((index) => {
        if (cusMvStoreSubTitleShow === index) return
        setCusMvStoreSubTitleShow(index)
    }, [cusMvStoreSubTitleShow]);



    const [cusComparePriceShow, setCusComparePriceShow] = useState(1);
    const handleCusComparePriceShow = useCallback((index) => {
        if (cusComparePriceShow === index) return
        setCusComparePriceShow(index)
    }, [cusComparePriceShow]);


    const [cusStockQtyShow, setCusStockQtyShow] = useState(0);
    const handleCusStockQtyShow = useCallback((index) => {
        if (cusStockQtyShow === index) return
        setCusStockQtyShow(index)
    }, [cusStockQtyShow]);


    const [priceDisplayTypeSelect, setPriceDisplayTypeSelect] = useState('total');
    const priceDisplayChoice = [
        { label: 'Unit', value: 'unit' },
        { label: 'Total', value: 'total' },
        { label: 'Hide', value: 'hide' },
    ];
    const handlePriceDisplayChoice = useCallback((value) => {
        setPriceDisplayTypeSelect(value);
    }, []);

    


    const [customCssFieldText,setCustomCssFieldText] = useState('');

    const handleCustomCssFieldText = useCallback((value)=>{
        setCustomCssFieldText(value)
    },[]);


    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    <Box paddingBlockEnd={'400'}>
                        <Card>
                            <Box maxWidth='200px' paddingBlockEnd={'200'}>
                                <InlineStack blockAlign='center' align='start' as='div'>
                                    <Text as='h3' variant='headingMd'>Type your Ruleset Name</Text>
                                    <Icon source={ChatIcon} tone='info'>
                                    </Icon>
                                </InlineStack>
                            </Box>
                            <TextField
                                name='rulesetName'
                                placeholder='Type your ruleset name'
                                onChange={handleRulesetName}
                                value={rulesetName}
                                type='text'
                            />

                        </Card>
                    </Box>

                    <Box paddingBlockEnd={'400'}>
                        <Card>
                            <Box maxWidth='200px' paddingBlockEnd={'200'}>
                                <InlineStack blockAlign='center' align='start' as='div'>
                                    <Text as='h3' variant='headingMd'>How to Assign A Product</Text>
                                    <Icon source={ChatIcon} tone='info'>
                                    </Icon>
                                </InlineStack>

                            </Box>
                            {/* <Text as='p' variant='bodySm'>Select a method to apply Multivariants to your product</Text> */}
                            <Box>
                                <ChoiceList
                                    title='Select a method to apply Multivariants to your product'
                                    choices={[
                                        { label: 'All Products', value: 'allproducts' },
                                        { label: 'Product Type', value: 'productType', renderChildren: renderChoiceListTextField },
                                        { label: 'Product Vendor', value: 'productVendor', renderChildren: renderChoiceListTextField },
                                        { label: 'Specific Product URL', value: 'productUrl', renderChildren: renderChoiceListTextField },

                                    ]}

                                    selected={selected}
                                    onChange={(value) => setSelected(value)}
                                />


                            </Box>

                        </Card>

                    </Box>

                    <Box paddingBlockEnd={'400'}>
                        <Card>
                            <Box maxWidth='200px' paddingBlockEnd={'200'}>
                                <InlineStack blockAlign='center' align='start' as='div'>
                                    <Text as='h3' variant='headingMd'>Variant Display Type</Text>
                                    <Icon source={ChatIcon} tone='info'>
                                    </Icon>
                                </InlineStack>
                            </Box>

                            <Box borderWidth='025' borderRadius='200' borderColor='border-brand' paddingBlock={'200'} paddingInline={'300'}>
                                <InlineStack align='space-between' blockAlign='center'>
                                    <Text as='p' variant='bodyMd'>Product with 1 option</Text>
                                    <Select
                                        label='pd one option'
                                        labelHidden
                                        name='productOneOption'
                                        options={[
                                            { label: 'List Display', value: 'list' },
                                            { label: 'Swatch', value: 'swatch' },
                                            { label: 'Grid/Matrix', value: 'grid-matrix' },
                                        ]}
                                        value={pdOneoptionSelected}
                                        onChange={handlePdOneOption}

                                    />


                                </InlineStack>
                            </Box>

                            <Box paddingBlock={'500'}>
                                <Box borderWidth='025' borderRadius='200' borderColor='border-brand' paddingBlock={'200'} paddingInline={'300'}>
                                    <InlineStack align='space-between' blockAlign='center'>
                                        <Text as='p' variant='bodyMd'>Product with 2 option</Text>

                                        <InlineStack gap={'200'}>
                                            <Select
                                                label='pd one option'
                                                labelHidden
                                                name='productOneOption'
                                                options={[
                                                    { label: 'List Display', value: 'list' },
                                                    { label: 'Swatch', value: 'swatch' },
                                                    { label: 'Grid/Matrix', value: 'grid-matrix' },
                                                ]}
                                                value={pdTwoOptionSelectedFirst}
                                                onChange={handleTwoOptionFrist}

                                            />

                                            <Select
                                                label='pd one option'
                                                labelHidden
                                                name='productOneOption'
                                                options={[
                                                    { label: 'List Display', value: 'list' },
                                                    { label: 'Swatch', value: 'swatch' },
                                                    { label: 'Grid/Matrix', value: 'grid-matrix' },
                                                ]}
                                                value={pdTwoOptionSelectedSecond}
                                                onChange={handleTwoOptionSecond}

                                            />
                                        </InlineStack>


                                    </InlineStack>
                                </Box>
                            </Box>



                            <Box borderWidth='025' borderRadius='200' borderColor='border-brand' paddingBlock={'200'} paddingInline={'300'}>
                                <InlineStack align='space-between' blockAlign='center'>
                                    <Text as='p' variant='bodyMd'>Product with 3 option</Text>

                                    <InlineStack gap={'200'}>
                                        <Select
                                            label='pd one option'
                                            labelHidden
                                            name='productOneOption'
                                            options={[
                                                { label: 'List Display', value: 'list' },
                                                { label: 'Swatch', value: 'swatch' },
                                                { label: 'Grid/Matrix', value: 'grid-matrix' },
                                            ]}
                                            value={pdThreeOptionSelectedFirst}
                                            onChange={handleThreeOptionFrist}

                                        />

                                        <Select
                                            label='pd one option'
                                            labelHidden
                                            name='productOneOption'
                                            options={[
                                                { label: 'List Display', value: 'list' },
                                                { label: 'Swatch', value: 'swatch' },
                                                { label: 'Grid/Matrix', value: 'grid-matrix' },
                                            ]}
                                            value={pdThreeOptionSelectedSecond}
                                            onChange={handleThreeOptionSecond}

                                        />

                                        <Select
                                            label='pd one option'
                                            labelHidden
                                            name='productOneOption'
                                            options={[
                                                { label: 'List Display', value: 'list' },
                                                { label: 'Swatch', value: 'swatch' },
                                                { label: 'Grid/Matrix', value: 'grid-matrix' },
                                            ]}
                                            value={pdThreeOptionSelectedThird}
                                            onChange={handleThreeOptionThird}

                                        />
                                    </InlineStack>


                                </InlineStack>
                            </Box>





                        </Card>
                    </Box>

                    <Box paddingBlockEnd={'400'}>
                        <Card>
                            <Box maxWidth='200px' paddingBlockEnd={'200'}>
                                <InlineStack blockAlign='center' align='start' as='div'>
                                    <Text as='h3' variant='headingMd'>Advance Restrictions</Text>
                                    <Icon source={ChatIcon} tone='info'>
                                    </Icon>
                                </InlineStack>
                            </Box>
                            <Text>You can set different types of restrictions here.</Text>


                            <Box paddingBlockStart={'300'}>
                                <Box padding={'300'} background='bg-fill-disabled' borderRadius='200'>
                                    <Box maxWidth='200px' paddingBlockEnd={'200'}>
                                        <InlineStack blockAlign='center' align='start' as='div'>
                                            <Text as='h3' variant='headingMd'>Quantity Restrictions</Text>
                                            <Icon source={ChatIcon} tone='info'>
                                            </Icon>
                                        </InlineStack>
                                    </Box>

                                    <InlineStack gap={'200'} align='space-between'>
                                        <Box paddingBlockStart={'500'} minWidth='48%'>
                                            <Text>Minimum Quantity</Text>
                                            <Box paddingBlockStart={'200'}>
                                                <Box background='bg-fill' padding={'300'} borderRadius='200'>
                                                    <BlockStack gap={'200'} >
                                                        <TextField

                                                            name='pervariantMin'
                                                            type='number'
                                                            label='Per Variant'
                                                            value='0'
                                                            onChange={() => { }}


                                                        />

                                                        <TextField

                                                            name='perOptiontMin'
                                                            type='number'
                                                            label='Per Option'
                                                            value={'0'}
                                                            onChange={() => { }}


                                                        />

                                                        <TextField

                                                            name='TotalcombotMin'
                                                            type='number'
                                                            label='Total (Combination)'
                                                            value={'0'}
                                                            onChange={() => { }}

                                                        />
                                                    </BlockStack>
                                                </Box>

                                            </Box>
                                        </Box>

                                        <Box paddingBlockStart={'500'} minWidth='48%'>
                                            <Text>Maximum Quantity</Text>
                                            <Box paddingBlockStart={'200'}>
                                                <Box background='bg-fill' padding={'300'} borderRadius='200'>
                                                    <BlockStack gap={'200'} >
                                                        <TextField

                                                            name='pervariantMin'
                                                            type='number'
                                                            label='Per Variant'
                                                            value={'0'}
                                                            onChange={() => { }}

                                                        />

                                                        <TextField

                                                            name='pervariantMin'
                                                            type='number'
                                                            label='Per Option'
                                                            value={'0'}
                                                            onChange={() => { }}


                                                        />

                                                        <TextField

                                                            name='pervariantMin'
                                                            type='number'
                                                            label='Total Combination'
                                                            value={'0'}
                                                            onChange={() => { }}

                                                        />
                                                    </BlockStack>
                                                </Box>

                                            </Box>
                                        </Box>

                                    </InlineStack>

                                    {moreRestrictionShow &&

                                        <InlineStack gap={'200'} align='space-between'>
                                            <Box paddingBlockStart={'500'} minWidth='48%'>
                                                <Text>Minimum Limit Based on Order value</Text>
                                                <Box paddingBlockStart={'200'}>
                                                    <Box background='bg-fill' padding={'300'} borderRadius='200'>
                                                        <BlockStack gap={'200'} >
                                                            <TextField

                                                                name='pervariantMin'
                                                                type='number'
                                                                label='Per Variant'
                                                                value={'0'}
                                                                onChange={() => { }}

                                                            />

                                                            <TextField

                                                                name='pervariantMin'
                                                                type='number'
                                                                label='Total Combination'
                                                                value={'0'}
                                                                onChange={() => { }}

                                                            />
                                                        </BlockStack>
                                                    </Box>

                                                </Box>
                                            </Box>

                                            <Box paddingBlockStart={'500'} minWidth='48%'>
                                                <Text>Maximum Limit Based on Order value</Text>
                                                <Box paddingBlockStart={'200'}>
                                                    <Box background='bg-fill' padding={'300'} borderRadius='200'>
                                                        <BlockStack gap={'200'} >
                                                            <TextField

                                                                name='pervariantMin'
                                                                type='number'
                                                                label='Per Variant'
                                                                value={'0'}
                                                                onChange={() => { }}

                                                            />

                                                            <TextField

                                                                name='pervariantMin'
                                                                type='number'
                                                                label='Total Combination'
                                                                value={'0'}
                                                                onChange={() => { }}

                                                            />
                                                        </BlockStack>
                                                    </Box>

                                                </Box>
                                            </Box>

                                            <Box paddingBlockStart={'500'} minWidth='48%'>
                                                <Text>Variant Restrictions</Text>
                                                <Box paddingBlockStart={'200'}>
                                                    <Box background='bg-fill' padding={'300'} borderRadius='200'>
                                                        <BlockStack gap={'200'} >
                                                            <TextField

                                                                name='pervariantMin'
                                                                type='number'
                                                                label='Minimum Variants'
                                                                value={'0'}
                                                                onChange={() => { }}

                                                            />

                                                            <TextField

                                                                name='pervariantMin'
                                                                type='number'
                                                                label='Maximum Variants'
                                                                value={'0'}
                                                                onChange={() => { }}

                                                            />
                                                        </BlockStack>
                                                    </Box>

                                                </Box>
                                            </Box>

                                            <Box paddingBlockStart={'500'} minWidth='48%'>
                                                <Text>Quantity Selection Type</Text>
                                                <Box paddingBlockStart={'200'}>
                                                    <Box background='bg-fill' padding={'300'} borderRadius='200'>
                                                        <BlockStack gap={'200'} >
                                                            <TextField

                                                                name='pervariantMin'
                                                                type='number'
                                                                label='Interval Quantity'
                                                                value={'0'}
                                                                onChange={() => { }}

                                                            />


                                                        </BlockStack>
                                                    </Box>

                                                </Box>
                                            </Box>
                                        </InlineStack>
                                    }

                                    <Box paddingBlockStart={'200'} paddingBlockEnd={'100'}>
                                        <InlineStack align='end'>
                                            <Button size='large' variant='primary' onClick={handleShowMoreRestriction}>
                                                {

                                                    moreRestrictionShow === false ? 'More Restriction Settings' : 'Less Restriction Settings'

                                                }
                                            </Button>
                                        </InlineStack>
                                    </Box>






                                </Box>
                            </Box>



                        </Card>
                    </Box>



                    <Box paddingBlockEnd={'400'}>
                        <Card>
                            <Box maxWidth='200px' paddingBlockEnd={'200'}>
                                <InlineStack blockAlign='center' align='start' as='div'>
                                    <Text as='h3' variant='headingMd'>Basic Customizations</Text>
                                    <Icon source={ChatIcon} tone='info'>
                                    </Icon>
                                </InlineStack>
                            </Box>

                            <Divider />

                            <Box paddingBlockStart={'200'}>

                                <Box>
                                    <InlineStack align='space-between'>
                                        <Box minWidth='30%'>
                                            <CustomBtnMv mvData={mvBtnList} />
                                        </Box>

                                        <Box minWidth='60%'>
                                            <CustomizationAddtoCart />
                                        </Box>
                                    </InlineStack>
                                </Box>

                            </Box>


                        </Card>
                    </Box>

                    {showMoreSettingsCard &&
                        <Box paddingBlockEnd={'400'}>
                            <Card>
                                <Box
                                    background='bg'
                                    padding={'300'}
                                    borderRadius='200'

                                >
                                    <Box paddingBlockEnd={'500'}>
                                        <BlockStack gap={'300'}>
                                            <Text variant='headingMd' as='h4'>Variant custom test title?</Text>
                                            <ButtonGroup variant='segmented'>
                                                <Button
                                                    pressed={variantCusTitleShow === 0}
                                                    onClick={() => handleVariantCusTitleShow(0)}
                                                >Show</Button>

                                                <Button
                                                    pressed={variantCusTitleShow === 1}
                                                    onClick={() => handleVariantCusTitleShow(1)}
                                                >Hide</Button>

                                                <Button
                                                    pressed={variantCusTitleShow === 2}
                                                    onClick={() => handleVariantCusTitleShow(2)}
                                                >Expandable</Button>

                                            </ButtonGroup>

                                            <InlineStack align='space-between'>
                                                <Box minWidth='87%'>
                                                    <TextField

                                                        placeholder='Custom Title'
                                                        //value="Variant Title"
                                                        onChange={() => { }}
                                                    />
                                                </Box>
                                                <Button variant='secondary' tone='success'>Default</Button>
                                            </InlineStack>

                                        </BlockStack>
                                    </Box>


                                    <Box paddingBlockEnd={'500'}>
                                        <BlockStack gap={'300'}>
                                            <Text variant='headingMd' as='h4'>Want to Show checkout Button?</Text>
                                            <ButtonGroup variant='segmented'>
                                                <Button
                                                    pressed={checkoutCusTitleShow === 0}
                                                    onClick={() => handleCheckoutCusTitleShow(0)}
                                                >Show</Button>

                                                <Button
                                                    pressed={checkoutCusTitleShow === 1}
                                                    onClick={() => handleCheckoutCusTitleShow(1)}
                                                >Hide</Button>

                                                <Button
                                                    pressed={checkoutCusTitleShow === 2}
                                                    onClick={() => handleCheckoutCusTitleShow(2)}
                                                >Expandable</Button>

                                            </ButtonGroup>

                                            <InlineStack align='space-between'>
                                                <Box minWidth='87%'>
                                                    <TextField

                                                        placeholder='Checkout'
                                                        //value="Variant Title"
                                                        onChange={() => { }}
                                                    />
                                                </Box>
                                                <Button variant='secondary' tone='success'>Default</Button>
                                            </InlineStack>

                                        </BlockStack>
                                    </Box>


                                    <Box paddingBlockEnd={'500'}>
                                        <BlockStack gap={'300'}>
                                            <Text variant='headingMd' as='h4'>Multivariant Title (Store View)</Text>
                                            <ButtonGroup variant='segmented'>
                                                <Button
                                                    pressed={cusMvStoreTitleShow === 0}
                                                    onClick={() => handleCusMvStoreTitleShow(0)}
                                                >Show</Button>

                                                <Button
                                                    pressed={cusMvStoreTitleShow === 1}
                                                    onClick={() => handleCusMvStoreTitleShow(1)}
                                                >Hide</Button>



                                            </ButtonGroup>

                                            <InlineStack align='space-between'>
                                                <Box minWidth='87%'>
                                                    <TextField

                                                        placeholder='Bulk Order'
                                                        //value="Variant Title"
                                                        onChange={() => { }}
                                                    />
                                                </Box>
                                                <Button variant='secondary' tone='success'>Default</Button>
                                            </InlineStack>

                                        </BlockStack>
                                    </Box>


                                    <Box paddingBlockEnd={'500'}>
                                        <BlockStack gap={'300'}>
                                            <Text variant='headingMd' as='h4'>Multivariant Sub Title (Store View)</Text>
                                            <ButtonGroup variant='segmented'>
                                                <Button
                                                    pressed={cusMvStoreSubTitleShow === 0}
                                                    onClick={() => handleCusMvStoreSubTitleShow(0)}
                                                >Show</Button>

                                                <Button
                                                    pressed={cusMvStoreSubTitleShow === 1}
                                                    onClick={() => handleCusMvStoreSubTitleShow(1)}
                                                >Hide</Button>



                                            </ButtonGroup>

                                            <InlineStack align='space-between'>
                                                <Box minWidth='87%'>
                                                    <TextField

                                                        placeholder='Subtitle'
                                                        //value="Variant Title"
                                                        onChange={() => { }}
                                                    />
                                                </Box>
                                                <Button variant='secondary' tone='success'>Default</Button>
                                            </InlineStack>

                                        </BlockStack>
                                    </Box>


                                    <Box paddingBlockEnd={'500'}>
                                        <BlockStack gap={'300'}>
                                            <Text variant='headingMd' as='h4'>Want to Show Compare Price?</Text>
                                            <ButtonGroup variant='segmented'>
                                                <Button
                                                    pressed={cusComparePriceShow === 0}
                                                    onClick={() => handleCusComparePriceShow(0)}
                                                >Show</Button>

                                                <Button
                                                    pressed={cusComparePriceShow === 1}
                                                    onClick={() => handleCusComparePriceShow(1)}
                                                >Hide</Button>



                                            </ButtonGroup>



                                        </BlockStack>
                                    </Box>

                                    <Box paddingBlockEnd={'500'}>
                                        <BlockStack gap={'300'}>
                                            <Text variant='headingMd' as='h4'>Want to Show Available Stock Quantity?</Text>
                                            <ButtonGroup variant='segmented'>
                                                <Button
                                                    pressed={cusStockQtyShow === 0}
                                                    onClick={() => handleCusStockQtyShow(0)}
                                                >Show</Button>

                                                <Button
                                                    pressed={cusStockQtyShow === 1}
                                                    onClick={() => handleCusStockQtyShow(1)}
                                                >Hide</Button>



                                            </ButtonGroup>



                                        </BlockStack>
                                    </Box>


                                    <Box paddingBlockEnd={'500'}>
                                        <BlockStack gap={'200'}>
                                            <Text variant='headingMd' as='h4'>Variant Price Display Type</Text>
                                            <ChoiceList
                                                title=''
                                                choices={priceDisplayChoice}
                                                onChange={handlePriceDisplayChoice}
                                                selected={priceDisplayTypeSelect}
                                            />
                                        </BlockStack>

                                    </Box>


                                    <Box paddingBlockEnd={'500'}>
                                        <BlockStack gap={'300'}>
                                            <Text variant='headingMd' as='h4'>Text Before Price</Text>


                                            <InlineStack align='space-between'>
                                                <Box minWidth='87%'>
                                                    <TextField

                                                        placeholder='Text before price'
                                                        //value="Variant Title"
                                                        onChange={() => { }}
                                                    />
                                                </Box>
                                                <Button variant='secondary' tone='success'>Default</Button>
                                            </InlineStack>

                                        </BlockStack>
                                    </Box>

                                    <Box paddingBlockEnd={'500'}>
                                        <BlockStack gap={'300'}>
                                            <Text variant='headingMd' as='h4'>Text Before Quantity Field</Text>


                                            <InlineStack align='space-between'>
                                                <Box minWidth='87%'>
                                                    <TextField

                                                        placeholder='Text before Qty field'

                                                        onChange={() => { }}
                                                    />
                                                </Box>
                                                <Button variant='secondary' tone='success'>Default</Button>
                                            </InlineStack>

                                        </BlockStack>
                                    </Box>

                                    <Box paddingBlockEnd={'500'}>
                                        <BlockStack gap={'300'}>
                                            <Text variant='headingMd' as='h4'>Custom Text before variant Title</Text>


                                            <InlineStack align='space-between'>
                                                <Box minWidth='87%'>
                                                    <TextField

                                                        placeholder='Text before Qty field'
                                                        // value="Custom Title"
                                                        onChange={() => { }}
                                                    />
                                                </Box>
                                                <Button variant='secondary' tone='success'>Default</Button>
                                            </InlineStack>

                                        </BlockStack>
                                    </Box>

                                    <Box paddingBlockEnd={'500'}>
                                        <BlockStack gap={'300'}>
                                            <Text variant='headingMd' as='h4'>Add to cart Button Text</Text>


                                            <InlineStack align='space-between'>
                                                <Box minWidth='87%'>
                                                    <TextField

                                                        placeholder='Add to cart'
                                                        // value="Add to Cart"
                                                        onChange={() => { }}
                                                    />
                                                </Box>
                                                <Button variant='secondary' tone='success'>Default</Button>
                                            </InlineStack>

                                        </BlockStack>
                                    </Box>

                                    <Box paddingBlockEnd={'500'}>
                                        <BlockStack gap={'300'}>
                                            <Text variant='headingMd' as='h4'>Checkout Button Text</Text>


                                            <InlineStack align='space-between'>
                                                <Box minWidth='87%'>
                                                    <TextField

                                                        placeholder='Checkout'
                                                        // value="Checkout"
                                                        onChange={() => { }}
                                                    />
                                                </Box>
                                                <Button variant='secondary' tone='success'>Default</Button>
                                            </InlineStack>

                                        </BlockStack>
                                    </Box>

                                    <Box paddingBlockEnd={'500'}>
                                        <Card>
                                            <Box maxWidth='max-content' paddingBlockEnd={'200'}>
                                                <InlineStack blockAlign='center' align='start' as='div' gap={'100'}>
                                                    <Text as='h3' variant='headingMd'>Custom CSS”</Text>
                                                    <Icon source={ChatIcon} tone='info'>
                                                    </Icon>
                                                </InlineStack>
                                            </Box>
                                            <Text variant='bodySm'>Apply custom CSS to your bulk orders for a unique and branded look. Make your orders stand out with personalized styles that reflect your brand's identity.</Text>

                                         


                                                <Box paddingBlockStart={'300'} paddingBlockEnd={'200'}>

                                                    <Box paddingBlock={'300'}>

                                                        <TextField

                                                            type='text'
                                                            name='mvFasterLoad'
                                                            value={customCssFieldText}
                                                            multiline={6}
                                                            placeholder='write custom css here'
                                                            onChange={handleCustomCssFieldText}



                                                        />





                                                    </Box>


                                                </Box>






                                        </Card>
                                    </Box>

                                </Box>


                            </Card>
                        </Box>
                    }

                    <Box paddingBlockEnd={'400'}>

                        <Button
                            fullWidth
                            disclosure={moreSettingsAreaExpand ? 'up' : 'down'}
                            onClick={() => { setMoreSettingsAreaExpand(!moreSettingsAreaExpand); handleShowMoreSettingsCard() }}
                            size='large'
                        >{moreSettingsAreaExpand ? 'Less Settings ' : 'More Settings'}</Button>

                    </Box>

                    <PageActions

                        primaryAction={<Button variant='primary' tone='success'>Save</Button>}
                        secondaryActions={<Button variant='secondary'>Discard</Button>}

                    />

                </Layout.Section>

                <Layout.Section variant='oneThird'>
                    <Box paddingBlockEnd={'400'}>

                        <Card>

                            <BlockStack gap={'500'}>
                                <Text as='h3' variant='headingLg'>Preview</Text>
                                <Text as='h4' variant='headingMd'>Variants Grid/Matix Layout</Text>
                                <Text as='p' variant='bodySm'>*** This Feature is available from on the <Text as='span' variant='headingSm'>Standard & Professional</Text> plan</Text>
                            </BlockStack>

                            <Box paddingBlockStart={'300'}>
                                <Image
                                    source={gridView}
                                    alt='Grid View'
                                    height={'auto'}
                                    width={'100%'}
                                />
                            </Box>

                        </Card>

                    </Box>



                </Layout.Section>

                {/* <Footer></Footer> */}
            </Layout>
        </Page>
    )
}



export default CreateRuleset