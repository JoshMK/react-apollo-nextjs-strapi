import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
	{
		articles {
			title
			description
		}
	}
`;

export default ARTICLES_QUERY;
