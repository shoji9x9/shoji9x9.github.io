/**
 * ContainerコンポーネントとPresenterコンポーネントを組み合わせた高階コンポーネント
 * @param {React.FunctionComponent<any>} Container - プレゼンターを受け取るコンテナー
 * @param {React.FunctionComponent<any>} Presenter - コンテナーに渡されるプレゼンター
 * @returns {React.FunctionComponent} - ContainerとPresenterを組み合わせた高階コンポーネント
 */
export function containPresenter(
  Container: React.FunctionComponent<any>,
  Presenter: React.FunctionComponent<any>
): React.FunctionComponent<any> {
  return (props: any) => (
    <Container
      presenter={(presenterProps: any) => <Presenter {...presenterProps} />}
      {...props}
    />
  );
}
