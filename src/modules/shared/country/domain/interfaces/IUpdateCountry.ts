import shortContry from '@shared/util/ShortCountry';

interface IUpdateCountry {
  short_name?: shortContry;
  long_name?: string;
  code?: string;
  updated_at: Date;
}

export default IUpdateCountry;