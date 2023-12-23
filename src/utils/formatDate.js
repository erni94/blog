import { format, parseISO } from 'date-fns';

const formatDate = (dateString) => {
  const parsedDate = parseISO(dateString);
  return format(parsedDate, 'MMMM d, yyyy');
};

export default formatDate;
