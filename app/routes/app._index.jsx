import { Box, Layout, Text, Page, Card, DataTable, Badge, IndexTable, useIndexResourceState, AccountConnection, BlockStack, Bleed, Button, Icon, IndexFilters } from "@shopify/polaris";
import Announcement from "../components/announcement/Announcement";
import { DeleteIcon, MenuHorizontalIcon } from '@shopify/polaris-icons';
import { useState } from "react";
import { orders } from "../order-data";
import Footer from "../components/footer/Footer";
import TableSingleItemAction from "../components/Table/TableSingleItemActions/TableSingleItemAction";





export default function Index() {



  const [itemStrings, setItemStrings] = useState([
    "All products",
    "Tag",
    "Vendor",
    "Product Type",
    "Active",
    "Deactive",
  ]);
  const tabs = itemStrings.map((item, index) => ({
    content: item,
    index,
    onAction: () => {},
    id: `${item}-${index}`,
    isLocked: index === 0,
    actions:
      index === 0
        ? []
        : [
            
          ],
  }));

  const sortOptions = [
    { label: 'Order', value: 'order asc', directionLabel: 'Ascending' },
    { label: 'Order', value: 'order desc', directionLabel: 'Descending' },
    { label: 'Customer', value: 'customer asc', directionLabel: 'A-Z' },
    { label: 'Customer', value: 'customer desc', directionLabel: 'Z-A' },
    { label: 'Date', value: 'date asc', directionLabel: 'A-Z' },
    { label: 'Date', value: 'date desc', directionLabel: 'Z-A' },
    { label: 'Total', value: 'total asc', directionLabel: 'Ascending' },
    { label: 'Total', value: 'total desc', directionLabel: 'Descending' },
  ];

  const [sortSelected, setSortSelected] = useState(['order asc']);
  // const orders = [
  //   {
  //     id: '1011',
  //     rTitle: 'Ruleset 1',
  //     ruleSetTone: 'success',
  //     appliedFor: 'Product 1',
  //     order: '#1020',
  //     date: 'Jul 20 at 4:34pm',
  //     customer: 'Jaydon Stanton',
  //     total: '$969.44',
  //     paymentStatus: <Badge progress="complete">Paid</Badge>,
  //     fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
  //   },
  //   {
  //     id: '1012',
  //     rTitle: 'Ruleset 2',
  //     ruleSetTone: 'enabled',
  //     appliedFor: 'Product 2 this i sidsidh isdis iasdasdb ohasohd sa hdsa dasc.Product 2 this i sidsidh isdis iasdasdb ohasohd sa hdsa dasc.Product 2 this i sidsidh isdis iasdasdb ohasohd sa hdsa dasc',
  //     order: '#1019',
  //     date: 'Jul 20 at 3:46pm',
  //     customer: 'Ruben Westerfelt',
  //     total: '$701.19',
  //     paymentStatus: <Badge progress="partiallyComplete">Partially paid</Badge>,
  //     fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
  //   },
  //   {
  //     id: '1013',
  //     rTitle: 'Ruleset 3',
  //     ruleSetTone: 'success',
  //     appliedFor: 'Product 3',
  //     order: '#1018',
  //     date: 'Jul 20 at 3.44pm',
  //     customer: 'Leo Carder',
  //     total: '$798.24',
  //     paymentStatus: <Badge progress="complete">Paid</Badge>,
  //     fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
  //   },

  //   {
  //     id: '1014',
  //     rTitle: 'Ruleset 3',
  //     ruleSetTone: 'success',
  //     appliedFor: 'Product 3',
  //     order: '#1018',
  //     date: 'Jul 20 at 3.44pm',
  //     customer: 'Leo Carder',
  //     total: '$798.24',
  //     paymentStatus: <Badge progress="complete">Paid</Badge>,
  //     fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
  //   },

  //   {
  //     id: '1015',
  //     rTitle: 'Ruleset 3',
  //     ruleSetTone: 'success',
  //     appliedFor: 'Product 3',
  //     order: '#1018',
  //     date: 'Jul 20 at 3.44pm',
  //     customer: 'Leo Carder',
  //     total: '$798.24',
  //     paymentStatus: <Badge progress="complete">Paid</Badge>,
  //     fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
  //   },

  //   {
  //     id: '1016',
  //     rTitle: 'Ruleset 3',
  //     ruleSetTone: 'success',
  //     appliedFor: 'Product 3',
  //     order: '#1018',
  //     date: 'Jul 20 at 3.44pm',
  //     customer: 'Leo Carder',
  //     total: '$798.24',
  //     paymentStatus: <Badge progress="complete">Paid</Badge>,
  //     fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
  //   },
  // ];



  const resourceName = {
    singular: 'order',
    plural: 'orders',
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders);



  const bulkActions = [
    {
      content: "View Details",
      onAction: () => { console.log('from View Details') }
    },
    {
      content: "Actived Rulesets",
      onAction: () => { console.log('from View Actived Rulesets') }
    },
    {
      content: "Deactivated Rulesets",
      onAction: () => { console.log('from View Deactivated Rulesets') }
    },
    {
      icon: DeleteIcon,
      destructive: true,
      content: 'Delete Ruleset',
      onAction: () => console.log('Todo: implement bulk delete'),
    },
  ];


  const rowMarkup = orders.map(
    (
      { id, rTitle, ruleSetTone, appliedFor },
      index,
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell >
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {rTitle}
          </Text>
        </IndexTable.Cell>

        <IndexTable.Cell>
          <Badge tone={ruleSetTone}>Active</Badge>
        </IndexTable.Cell>

        <IndexTable.Cell className="table-maxWidth" ><Text as="p" variant="bodyMd" alignment="center" breakWord={true}>{appliedFor}</Text></IndexTable.Cell>

        <IndexTable.Cell>
          {'empty'}
        </IndexTable.Cell>


        <IndexTable.Cell>
          <TableSingleItemAction key={id} id={id} ruleSetTone={ruleSetTone}></TableSingleItemAction>
        </IndexTable.Cell>


      </IndexTable.Row>
    ),
  );
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Announcement></Announcement>
        </Layout.Section>

        <Layout.Section>
          <IndexFilters
          tabs={tabs}
          />
          <IndexTable
            resourceName={resourceName}
            itemCount={orders.length}
            selectedItemsCount={
              allResourcesSelected ? 'All' : selectedResources.length
            }
            onSelectionChange={handleSelectionChange}
            headings={[
              { title: 'Ruleset Title', alignment: 'start', },
              { title: 'Status', alignment: 'start', },
              { title: 'Applied for', alignment: 'center', },
              { title: 'Total', },
              { title: 'More', alignment: 'center', },

            ]}
            pagination={{
              hasNext: true,
              onNext: () => { console.log('next page') }
            }}

            bulkActions={bulkActions}
            
          >
            {rowMarkup}
          </IndexTable>
        </Layout.Section>
      </Layout>
          
      {/* <Footer></Footer> */}

    </Page>
  );
}







