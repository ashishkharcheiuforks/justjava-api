import { ApiModelProperty } from "@nestjs/swagger";
import { PaymentMethod } from "../../payments/models/PaymentMethod";
import { OrderPaymentStatus } from "../models/OrderPaymentStatus";
import { OrderStatus } from "../models/OrderStatus";
import { AddressDto } from "../../users/dto/Address.dto";
import { OrderItemDto } from "./OrderItem.dto";

export class OrderDto {
  @ApiModelProperty()
  id: string;

  @ApiModelProperty({ nullable: true })
  additionalComments: string;

  @ApiModelProperty()
  totalPrice: number;

  @ApiModelProperty()
  datePlaced: number;

  @ApiModelProperty({ enum: OrderStatus })
  status: string;

  @ApiModelProperty({ enum: PaymentMethod })
  paymentMethod: string;

  @ApiModelProperty({ enum: OrderPaymentStatus })
  paymentStatus: string;

  @ApiModelProperty({ nullable: true })
  userId: number;

  @ApiModelProperty({ nullable: true })
  addressId: number;

  @ApiModelProperty({ isArray: true, type: OrderItemDto })
  items: OrderItemDto[];
}
