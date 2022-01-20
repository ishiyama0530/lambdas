import * as AWS from "aws-sdk";

export const handler = async (event: any, context: any, callback: any) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(event.Records, null, 2),
  };
  return response;
};

// https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/images-create.html#images-create-sam