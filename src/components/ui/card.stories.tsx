import type { Meta, StoryObj } from "@storybook/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./card";
import { Button } from "./button";

const meta: Meta<typeof Card> = {
    title: "UI/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card content area.</p>
            </CardContent>
            <CardFooter>
                <Button>Action</Button>
            </CardFooter>
        </Card>
    ),
};

export const Simple: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Simple Card</CardTitle>
            </CardHeader>
            <CardContent>
                <p>This is a simple card without footer.</p>
            </CardContent>
        </Card>
    ),
};

export const WithContent: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Product Card</CardTitle>
                <CardDescription>Beautiful product description</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <p className="text-sm">
                        This card contains detailed information about a product
                        or service.
                    </p>
                    <p className="text-2xl font-bold">$99.99</p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Buy Now</Button>
            </CardFooter>
        </Card>
    ),
};

