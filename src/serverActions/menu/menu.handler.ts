import { db } from "@/db";
import { foodItemsTable } from "@/db/schemas/food-item.db.schema";
import { menusFoodItemsTable } from "@/db/schemas/menu.food-item.db.schema";
import { menusTable } from "@/db/schemas/menu.db.schema";
import type { InsertMenuType, UpdateMenuType } from "@/types/menu.type";
import { desc, eq } from "drizzle-orm";

export const listMenuHandler = async (
  limit: number = 10,
  offset: number = 1,
  organizationId?: string,
) => {
  try {
    const result = await db
      .select()
      .from(menusTable)
      .where(
        organizationId
          ? eq(menusTable.organizationId, organizationId)
          : undefined,
      )
      .limit(limit)
      .offset(offset);
    return result;
  } catch (error) {
    console.error("Error listing menus:", error);
    throw new Error(
      error instanceof Error ? error.message : "Unknown error while listing menus",
    );
  }
};

export const listMenuWithFoodItemHandler = async (
  limit: number = 10,
  offset: number = 1,
  organizationId?: string,
) => {
  try {
    // const result = await db
    //   .select({
    //     menuId: menusTable.id,
    //     menuName: menusTable.name,
    //     menusCoverPhotoUrl: menusTable.coverPhotoUrl,
    //     menuDate: menusTable.date,
    //     menuOrganizationId: menusTable.organizationId,
    //     menuDescription: menusTable.description,
    //     foodItemId: foodItemsTable.id,
    //     foodItemName: foodItemsTable.name,
    //     foodImageUrl: foodItemsTable.imageUrl,
    //   })
    //   .from(menusTable)
    //   .leftJoin(
    //     menusFoodItemsTable,
    //     eq(menusTable.id, menusFoodItemsTable.menuId),
    //   )
    //   .leftJoin(
    //     foodItemsTable,
    //     eq(menusFoodItemsTable.foodItemId, foodItemsTable.id),
    //   )
    //   .orderBy(desc(menusTable.createdAt))
    //   .limit(limit)
    //   .offset(offset);

    const menus = db.$with("menus_cte").as(
      db
        .select()
        .from(menusTable)
        .where(
          organizationId
            ? eq(menusTable.organizationId, organizationId)
            : undefined,
        )
        .orderBy(desc(menusTable.createdAt))
        .limit(limit)
        .offset(offset),
    );

    const result = await db
      .with(menus)
      .select({
        menuId: menus.id,
        menuName: menus.name,
        menusCoverPhotoUrl: menus.coverPhotoUrl,
        menuDate: menus.date,
        menuOrganizationId: menus.organizationId,
        menuDescription: menus.description,
        foodItemId: foodItemsTable.id,
        foodItemName: foodItemsTable.name,
        foodImageUrl: foodItemsTable.imageUrl,
      })
      .from(menus)
      .leftJoin(menusFoodItemsTable, eq(menus.id, menusFoodItemsTable.menuId))
      .leftJoin(
        foodItemsTable,
        eq(menusFoodItemsTable.foodItemId, foodItemsTable.id),
      );

    return result;
  } catch (error) {
    console.error("Error listing menus with food items:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while listing menus with food items",
    );
  }
};

export const fetchMenuByIdHandler = async (id: number) => {
  try {
    const result = await db
      .select()
      .from(menusTable)
      .where(eq(menusTable.id, id))
      .limit(1);
    return result[0] ?? null;
  } catch (error) {
    console.error("Error fetching menu by id:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unknown error while fetching menu by id",
    );
  }
};

export const createMenuHandler = async (menu: InsertMenuType) => {
  try {
    const result = await db.insert(menusTable).values(menu).returning();
    return result;
  } catch (error) {
    console.error("Error creating menu:", error);
    throw new Error(
      error instanceof Error ? error.message : "Unknown error while creating menu",
    );
  }
};

export const updateMenuHandlerById = async (
  id: number,
  menu: UpdateMenuType,
) => {
  try {
    const result = await db
      .update(menusTable)
      .set(menu)
      .where(eq(menusTable.id, id))
      .returning();
    return result;
  } catch (error) {
    console.error("Error updating menu:", error);
    throw new Error(
      error instanceof Error ? error.message : "Unknown error while updating menu",
    );
  }
};

export const deleteMenuByIdHandler = async (id: number) => {
  try {
    const result = await db
      .delete(menusTable)
      .where(eq(menusTable.id, id))
      .returning();
    return result;
  } catch (error) {
    console.error("Error deleting menu:", error);
    throw new Error(
      error instanceof Error ? error.message : "Unknown error while deleting menu",
    );
  }
};
