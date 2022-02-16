type feature = {
    icon: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >;
    title: string;
    body: string;
    mockup: string;
  };

  export default feature;