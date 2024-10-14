import PageContainer from '../PageContainer/PageContainer';
import Form from './Form/Form';
import TextBlock from './TextBlock/TextBlock';
const ContactPageBlock = () => {
  return (
    <PageContainer>
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        <TextBlock />
        <Form />
      </div>
    </PageContainer>
  );
};

export default ContactPageBlock;
