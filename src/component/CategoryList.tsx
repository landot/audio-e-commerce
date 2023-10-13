import { CategoryListStyles } from "@/style/CategoryList.styles";
import CategoryItem, { CategoryItemProps } from "./CategoryItem";

function isOddNumber(num: number): boolean {
    return num % 2 === 1;
}

function CategoryList(props: {
    categoryItems: CategoryItemProps[]
}) {
    return (
        <CategoryListStyles>
            {props.categoryItems.map((item, index ) => (
                <CategoryItem key={item.name} {...item} reverse={isOddNumber(index)} />
            ))}
        </CategoryListStyles>
    )
}

export default CategoryList;
