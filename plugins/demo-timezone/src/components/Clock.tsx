import React from 'react';
import { useEntity } from '@backstage/plugin-catalog-react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { getTimezone } from '../utils';
import { Card, CardContent, Typography } from '@mui/material';
dayjs.extend(utc);
dayjs.extend(timezone);

export function Clock() {
  const { entity } = useEntity();
  const timezone = getTimezone(entity);

  const time = dayjs();
  const formattedTime = time.tz(timezone ?? undefined).format('hh:mm:ss a Z');

  return (
    <Card>
      <CardContent>
        <Typography>
          Time in {timezone}:
        </Typography>
        <Typography variant='h6'>
          {formattedTime}
        </Typography>
      </CardContent>
    </Card>
  );
}
