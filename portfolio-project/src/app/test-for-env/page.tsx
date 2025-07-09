export default async function TestForEnv() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const temp = process.env.NEXT_PUBLIC_WOO;
  console.log(temp);

  return <div>Hello World</div>;
}
